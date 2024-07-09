import { NextRequest,NextResponse } from "next/server";
import { User } from "@/models/userModel";
import { ConnectDB } from "@/database/ConnectDB";
import jwt from 'jsonwebtoken';


export async function POST(request:NextRequest){
    const{response} = await request.json()
    console.log("🚀 ~ POST ~ response:", response)
ConnectDB()

try{
    	const userModel = await User.findOne({
            email:response.email
        })   
        if(userModel){
            return NextResponse.json(
                {
                    success:false,
                    message:"User already exist with this email account"
                },
            {
                status:400
            }
            )
        }
        const user = {
            name : response.name,
            email: response.email,
            password: response.sub,
            gender: "",
            avatar :response.picture ,
            address : "",
          }
          const newUser = new User(user);
          const token = jwt.sign(
            {
                id: newUser._id,
                name: newUser.name,
                email: newUser.email,
                user:"bagwise"
            },
            process.env.NEXT_AUTH_SECRET!,
            { expiresIn: '1w' }
        );
          await newUser.save()
        return NextResponse.json({
            token:token,
            success: true,
              message: "SignUp sucessFul"
          });

}
catch(error){
    return NextResponse.json({error:`error in signUp with google ${error}`},{status:500})
}



}