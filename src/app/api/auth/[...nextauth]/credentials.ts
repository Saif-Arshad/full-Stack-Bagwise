import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { ConnectDB } from "@/database/ConnectDB";
import { User } from "@/models/userModel";

export const authOption: NextAuthOptions = {
  providers: [

            // There will you write all the Provider
            // For example Credentials(Email,password)  or Fb ,google
        //  i use Email password as credentials

    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any): Promise<any> {


        // All Your value of field like email and password are in credential variable

        // This is a demo code to use that in login for future 

        // const result = await signIn('credentials', {
        //     redirect: false,
        //     email: value.email,
        //     password: value.password
        //   });
        //   console.log(result)
          
        //   if (result?.error) {
        //     toast.error(result.error)
        //     console.error(result.error);
        //   } else {
        //     console.log("Login successful!");
        //   }
        //   setLoading(false)
      
        // }

        // console.log("🚀 ~ authorize ~ credentials:", credentials)
        
        await ConnectDB();

        try {
          const user = await User.findOne({
            $or: [
              {
                email: credentials.email,
              },
            ],
          });

          if (!user) {
            throw new Error("No user found with this email");
          }
          if (!user.isVerified) {
            throw new Error("Please verify your account first");
          }

          const password = await bcrypt.compare(
            credentials.password,
            user.password
          );
          console.log("🚀 ~ authorize ~ password:", password);

          if (password) {
            return user;
          } else {
            throw new Error("Incorrect Password");
          }
        } catch (error: any) {
          console.error(error);
          throw error; 
        }
      },
    }),
  ],
  pages: {
    signIn: "/login-account",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXT_AUTH_SECRET,
  callbacks: {

        // Sessssion will run on every reload and have the values you set in layout or context folder

    async session({ session, token }) {
      if (token) {
        session._id = token._id?.toString();
        session.isVerified = token.isVerified;
        session.username = token.name;
      }
      return session;
    },
    async jwt({ user, token }) {
      if (user) {
        token._id = user._id?.toString();
        token.isVerified = user.isVerified;
        token.username = user.name;
      }
      return token;
    },
  },
};
