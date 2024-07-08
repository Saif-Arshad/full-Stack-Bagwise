import { NextRequest,NextResponse } from "next/server";
import { Categorie } from "@/models/categorieModel";
import { ConnectDB } from "@/database/ConnectDB";
import jwt from 'jsonwebtoken';


export async function GET(request: NextRequest) {
    const {token} = await request.json();
    ConnectDB()

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
        const category  = await Categorie.find()
        return NextResponse.json({
            success:true,
            category:category,
            message:"Get data sucessfully"
        })

    } catch (error) {
        return NextResponse.json({ message: `error in getting category ${error}` }, { status: 500 });
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
