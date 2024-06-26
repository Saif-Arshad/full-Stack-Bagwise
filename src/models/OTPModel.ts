import mongoose from 'mongoose'

const otpSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true
    },
    otp: {
        type: String,
        required: true
    },
    expire_at: {
        type: Date,
        required: true
    }
}, { timestamps: true });

export const OTP = mongoose.models.OTP || mongoose.model('OTP', otpSchema);