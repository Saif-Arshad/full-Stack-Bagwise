// import { sendMail } from "@/utils/mail";
// import { NextResponse } from "next/server";

// export async function POST() {
//     console.log("hey this is working");

//     const sender = {
//         name: "my app",
//         address: "mailtrap@demomailtrap.com", 
//     };

//     const recipients = [
//         {
//             name: 'John Doe',
//             address: 'saifarshad3344@gmail.com',
//         },
//     ];

//     try {
//         const result = await sendMail({
//             sender,
//             recipients,
//             subject: "This is the subject",
//             message: "This is the message",
//         });

//         return NextResponse.json({
//             success: true,
//             result,  
//         });
//     } catch (error:any) {
//         console.error('Error sending email:', error);  

//         return NextResponse.json({
//             success: false,
//             error: error.message || 'An error occurred',  
//         },{status:500});
//     }
// }
import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server';


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASSWORD,
    },
  });
export async function POST(req:NextRequest, res:NextResponse) {
    try {
      const { email } = await req.json();
  
      const otp = Math.floor(100000 + Math.random() * 900000).toString();
  
      // Save OTP to a temporary store (e.g., database, in-memory store, etc.)
      // Here we just log it, but in production, you should save it securely
      console.log(`Generated OTP for ${email}: ${otp}`);
  
      const mailOptions = {
        from:process.env.MAIL_USER,
        to: email,
        subject: 'Your OTP Code',
        text: `Your OTP code is ${otp}`,
      };
  
      const info = await transporter.sendMail(mailOptions);
      console.log('Email sent: ' + info.response);
  
      return NextResponse.json({ message: 'OTP sent successfully' });
    } catch (error) {
      console.error(error);
      return NextResponse.json({ message: 'Failed to send OTP',error:error }, { status: 500 });
    }
  };