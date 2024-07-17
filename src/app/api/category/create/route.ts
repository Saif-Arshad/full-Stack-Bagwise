import { NextRequest,NextResponse } from "next/server";
import { Categorie } from "@/models/categorieModel";
import { ConnectDB } from "@/database/ConnectDB";
import jwt from 'jsonwebtoken';


export async function POST(request: NextRequest) {
    const {name,description,token} = await request.json();
  
    await ConnectDB()

        let decoded;
    try {
        decoded = jwt.decode(token);
        console.log("🚀 ~ POST ~ decoded:", decoded)
        
        if (!decoded) {
            return NextResponse.json({
                success: false,
                error:{
                    message: 'Invalid token'
                }
            }, { status: 400 });
        }
    } catch (error) {
        console.error('Error decoding JWT:', error);
        return NextResponse.json({
            success: false,
            error:{
                message: 'Failed to decode token'
            }
        }, { status: 400 });
    }
    const user = (decoded as any).user;
    if(user=="bagwise"){

    
    try {
        const newCategory = await Categorie.create({
            name,description
        })
        newCategory.save()
        return NextResponse.json({
            success:true,
            message:"Category create sucessfully"
        })

    } catch (error) {
        return NextResponse.json({ message: `error in creating category ${error}` }, { status: 500 });
    }
}
else{

    return NextResponse.json({
        success: false,
        error:{
            message: 'Invalid token'
        }
    }, { status: 400 });
}
}
