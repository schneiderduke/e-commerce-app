import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
        id: String,
        title: String,
        description: String,
        price: Number,
        imgPath: String,
        productType: String
});

export interface Product extends mongoose.Document{

    id: string;
    title: string;
    description: string;
    price: number;
    imgPath: string;
    productType: string;

    
}