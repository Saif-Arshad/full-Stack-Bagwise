import {NextResponse,NextRequest} from 'next/server'
import { User } from '@/models/userModel'
import { OTP } from '@/models/OTPModel'
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { readFileSync } from 'fs';


export async function POST(request:NextRequest){

    const {new_password,token} = await request.json()

   const encryptedPassword = await bcrypt.hash(new_password, 10); 
   try {

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

    const email = (decoded as any).email;

     const user =await User.findOne({
        email:email
     })
     if(!user){
        return NextResponse.json({
         success: false,
         error:{
             message: `User not found`
            }
        },{status:404})
     }

        user.password=encryptedPassword
        user.save()

            return NextResponse.json({
                  success: true,
            message: `Reset password sucessFull`
            })
    } catch (error:any) {
        return NextResponse.json({
            success: false,
            message: `There was an error new password: ${error.message}`
        },{status: 500});
    }

}