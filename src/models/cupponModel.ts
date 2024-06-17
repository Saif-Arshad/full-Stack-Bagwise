import mongoose from 'mongoose';

const cupponSchema = new mongoose.Schema({
    name:{
        type :String,
        required:true,
        unique:true
    },
    code:{
        type:Number,
        required:true,
    },
    discount:{
        type:Number,
        required:true,
    },
    active:{
        type:Boolean,
        required:true,
    }   
});

export const Cuppon = mongoose.models || mongoose.model("Cuppon",cupponSchema)