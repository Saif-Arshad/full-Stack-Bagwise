import { NextRequest, NextResponse } from "next/server";
import { ConnectDB } from "@/database/ConnectDB";
import { User } from "@/models/userModel";
import { OTP } from "@/models/OTPModel";
import bcrypt from 'bcrypt';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD,
    },
});

export async function POST(req: NextRequest) {
    const userFormData = await req.json();
   const encryptedPassword = await bcrypt.hash(userFormData.password, 10); 
    const user = {
        name : userFormData.firstName + " " + userFormData.lastName,
        email: userFormData.email,
        password: encryptedPassword,
        gender: userFormData.gender,
        avatar : userFormData.avatar ,
        address : userFormData.address ,
      }
    console.log("🚀 ~ POST ~ userFormData:", userFormData);
    await ConnectDB();

    try {
        const duplicateEmail = await User.findOne({ email: user.email });

        if (duplicateEmail) {
            return NextResponse.json({
                success: false,
                error: {
                    message: "User email already exists"
                }
            }, { status: 400 });
        }

        const newUser = new User(user);
        
        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        console.log("🚀 ~ POST ~ otp:", otp)
        
        const otpData = new OTP({
            user_id: newUser._id,
            otp,
            expire_at: new Date(Date.now() + 10 * 60 * 1000) 
        });
        await otpData.save();

        const mailOptions = {
            from: process.env.MAIL_USER,
            to: user.email,
            subject: 'Your OTP Code',
            text: `Your OTP code is ${otp}`,
        };

        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);

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
