import { NextRequest, NextResponse } from "next/server";
import { ConnectDB } from "@/database/ConnectDB";
import {User} from "@/models/userModel"; 

export async function POST(req: NextRequest) {
    const userFormData = await req.json();
    console.log("🚀 ~ POST ~ userFormData:", userFormData);
    await ConnectDB();

    try {
        const duplicateEmail = await User.findOne({ email: userFormData?.email });

        if (duplicateEmail) {
            return NextResponse.json({
                success: false,
                error: {
                    message: "User email already exists"
                }
            });
        }
        const newUser = new User(userFormData); 

        await newUser.save(); 
        
        return NextResponse.json({
            success: true,
            message: "User created successfully"
        });
    } catch (error: any) {
        return NextResponse.json({
            success: false,
            message: `There was an error creating the user: ${error.message}`
        });
    }
}
