import {  NextAuthOptions, } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { ConnectDB } from "@/database/ConnectDB";
import { User } from "@/models/userModel";



export const authOption: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            id: "credentials",
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
              },
              async authorize(credentials:any):Promise<any> {
                  await ConnectDB()

                  try {
             const user =await User.findOne(
                        {
                            $or:[
                                {
                                    email:credentials.identifier
                                }
                            ]
                        }

                    )

                    if(!user){
                        throw new Error("No user found with this email")
                    }
                    if(!user.isVerified){
                        throw new Error("Please verify your account first")
                    }

                 const password =    await bcrypt.compare(credentials.password,user.password)
            

                    if(password){
                        return user
                    }
                    else{
                        throw new Error("Incorrect Password")

                    }

            
                } catch (error:any) {
                    throw new error
                  }
                  




            }
        })
            
    ],
    pages:{
        signIn:"/login-account"
    },
    session:{
        strategy:"jwt"
    },
    secret:process.env.NEXT_AUTH_SECRET,
    callbacks:{
        async session({session,token }){
            if(token){
                session._id= token._id?.toString(),
                session.isVerified = token.isVerified,
                session.username = token.name
            }
            return session
        },
        async jwt({user,token}){
            if(user){
                token._id= user._id?.toString(),
                token.isVerified = user.isVerified,
                token.username = user.name
            }
            return token
        }
    }
    
}