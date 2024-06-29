import { NextRequest, NextResponse } from 'next/server';
import { OTP } from '../../../../models/OTPModel';
import { User } from '../../../../models/userModel';
import jwt from 'jsonwebtoken';

export async function POST(req: NextRequest) {
    const { token, otp } = await req.json();
    console.log("🚀 ~ POST ~ otp:", otp);

    let decoded;
    try {
        decoded = jwt.decode(token);
        console.log("🚀 ~ POST ~ decoded:", decoded)
        
        if (!decoded) {
            return NextResponse.json({
                success: false,
                message: 'Invalid token'
            }, { status: 400 });
        }
    } catch (error) {
        console.error('Error decoding JWT:', error);
        return NextResponse.json({
            success: false,
            message: 'Failed to decode token'
        }, { status: 400 });
    }

    const email = (decoded as any).email;
    const userId = (decoded as any).id;
    console.log("🚀 ~ POST ~ email:", email,userId);

    try {
        // const user = await User.findOne({ email });
        // console.log("🚀 ~ POST ~ user:", user);

        // if (!user) {
        //     return NextResponse.json({
        //         success: false,
        //         message: 'User not found'
        //     }, { status: 404 });
        // }

        const otpData = await OTP.findOne({
            user_id: userId,
            otp: otp,
            expire_at: { $gt: new Date() }
        });
        console.log(otpData);

        if (!otpData) {
            return NextResponse.json({
                success: false,
                message: 'Invalid OTP'
            }, { status: 400 });
        }

        const user = await User.findOneAndUpdate(
            { email },
            { isVerified: true },
            { new: true }
        );

        if(!user){
            return NextResponse.json({
                success: false,
                message: 'User not found',
            },{status:500});
        }

        return NextResponse.json({
            success: true,
            message: 'OTP verified successfully',
            user: user
        });
    } catch (error) {
        console.error(error);
        return NextResponse.json({
            success: false,
            message: 'Failed to verify OTP',
            error
        }, { status: 500 });
    }
}
