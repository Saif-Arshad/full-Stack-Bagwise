import { NextRequest, NextResponse } from 'next/server';
import { OTP } from '../../../../models/OTPModel';
import { User } from '../../../../models/userModel';

export async function POST(req: NextRequest) {
    const { email, otp } = await req.json();

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return NextResponse.json({
                success: false,
                message: 'User not found'
            }, { status: 404 });
        }

        const otpData = await OTP.findOne({
            user_id: user._id,
            otp,
            expire_at: { $gt: new Date() } 
        });

        if (!otpData) {
            return NextResponse.json({
                success: false,
                message: 'Invalid OTP'
            }, { status: 400 });
        }

        // Optionally, you can mark the OTP as used or delete it after successful verification
        // await OTP.deleteOne({ _id: otpData._id });


        return NextResponse.json({
            success: true,
            message: 'OTP verified successfully'
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
