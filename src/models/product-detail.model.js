import { Schema } from "mongoose";
import { ProductSchema } from "../models/product.model"

export const ProductDetailSchema = new Schema({
    amount: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    product: {
        type: ProductSchema,
        required: true
    }
});