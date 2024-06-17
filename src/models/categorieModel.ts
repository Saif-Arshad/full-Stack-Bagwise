import mongoose from "mongoose";

const categorieModel = new mongoose.Schema({

    name:{
        type :String,
        required:true,
        unique:true
    },
    description:{
        type :String,
        required:true,
    }
    
}

 ,{
    timestamps: true
 }   
)
export const Categorie = mongoose.models || mongoose.model("Categorie",categorieModel)	