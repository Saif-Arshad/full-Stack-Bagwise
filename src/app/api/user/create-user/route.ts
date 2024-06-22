import { NextRequest,NextResponse } from "next/server";
import { ConnectDB } from "@/database/ConnectDB";
import { User } from "@/models/userModel";


export async function POST(req:NextRequest){
    const userFormData =await req.json()
    console.log("🚀 ~ POST ~ userFormData:", userFormData)
    await ConnectDB()
    try {
            const userModel =await new User.create(
                {
                }
            )
            await userModel.save()

            return NextResponse.json(
             {
                sucess:true,
                message:"user created sucessfully"
             }   
            )
    } catch (error) {
          return NextResponse.json({
             sucess:false,
                message:`There are some error in user creation ${error}`
          })
    }

    




}