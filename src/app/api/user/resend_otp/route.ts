import { NextRequest, NextResponse } from 'next/server';
import { User } from '@/models/userModel';
import { OTP } from '@/models/OTPModel'; // Assuming you have an otpModel defined
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD,
    },
});

export async function POST(req: NextRequest) {
    const { email } = await req.json();

    try {
        const existingUser = await User.findOne({ email });

        if (!existingUser) {
            return NextResponse.json({
                success: false,
                message: 'User not found'
            }, { status: 404 });
        }

        // Generate new OTP
        const otp = Math.floor(100000 + Math.random() * 900000).toString();

        // Update OTP in database
        const otpData = await OTP.findOneAndUpdate(
            { user_id: existingUser._id },
            { otp, expire_at: new Date(Date.now() + 10 * 60 * 1000) }, // Update OTP and expire_at
            { new: true }
        );

        // Resend OTP via email
        const mailOptions = {
            from: process.env.MAIL_USER,
            to: email,
            subject: 'Your OTP Code (Resent)',
            text: `Your OTP code is ${otp}`,
        };

        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);

        return NextResponse.json({ message: 'OTP resent successfully' });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'Failed to resend OTP', error }, { status: 500 });
    }
}
