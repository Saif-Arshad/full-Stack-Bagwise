import { NextRequest,NextResponse } from "next/server";
import { User } from "@/models/userModel";
import { ConnectDB } from "@/database/ConnectDB";
import jwt from 'jsonwebtoken';


export async function POST(request:NextRequest){
    const{response} = await request.json()
ConnectDB()

try{

    	const userModel = await User.findOne({
            email:response.email
        })  
        const token = jwt.sign(
            {
                id: userModel._id,
                name: userModel.name,
                email: userModel.email,
                user:"bagwise"
            },
            process.env.NEXT_AUTH_SECRET!,
            { expiresIn: '1w' }
        ); 
        if(userModel){
            return NextResponse.json(
                {
                    success:true,
                    message:"Login sucessfull"
                },
            {
                status:200
            }
            )
        }
        else{
            return NextResponse.json(
                {
                    token:token,
                    success:false,
                    message:"user not found"
                },
            {
                status:404
            }
        )}
}
catch(error){
    return NextResponse.json({error:`error in login with google ${error}`},{status:500})
}



}