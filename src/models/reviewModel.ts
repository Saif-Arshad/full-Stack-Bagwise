import mongoose from 'mongoose'


const ReviewSchema = new mongoose.Schema({

    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
    },
    ratting:{
        type:Number,
        required:true
    },
    message:{
        type:String,
        required:true
    }


},{timestamps:true})

export const Review = mongoose.models || mongoose.model('Review',ReviewSchema)