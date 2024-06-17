import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Categorie',

    },
    quantity: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
    },
    reviews: {
        type: Number,
    },
},
{
    timestamps: true
});

export const Product = mongoose.models || mongoose.model("Product", productSchema)