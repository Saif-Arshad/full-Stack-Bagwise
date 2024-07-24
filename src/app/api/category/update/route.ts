import { NextRequest,NextResponse } from "next/server";
import { Categorie } from "@/models/categorieModel";
import { ConnectDB } from "@/database/ConnectDB";
import jwt from 'jsonwebtoken';


export async function PATCH(request: NextRequest) {
    const value = await request.json();
    console.log("🚀 ~ PATCH ~ description:", value)
    const { name, description } = value. value;
    const token = value.headers.authorization;
    const id = request.nextUrl.searchParams.get('id');
    console.log("🚀 ~ PATCH ~ id:", id)
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
        const currentCategory = await Categorie.findByIdAndUpdate({_id:id},
            {
            name,description
            },
            {
                new:true
            }
        )
   
        currentCategory.save()
        return NextResponse.json({
            success:true,
            message:"Category updated sucessfully"
        })

    } catch (error) {
        return NextResponse.json({ message: `error in updating category ${error}` }, { status: 500 });
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
