import mongoose from 'mongoose';

const contactModel = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
})

export const Contact = mongoose.models || mongoose.model('Contact', contactModel)