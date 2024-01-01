import { Schema, model } from "mongoose";
import { TProduct } from "./product.interface";

const productSchema = new Schema<TProduct>(
    {
        title: {
            type: String,
            required: true,
            unique: true,
        },
        price: {
            type: Number,
            required: true
        },
        powerdby: {
            type: String,
            required: true,
        },
        motherboard: {
            type: String,
            required: true,
        },
        processor: {
            type: String,
            required: true,
        },
        ram: {
            type: String,
            required: true,
        },
        smps: {
            type: String,
            required: true,
        },
        graphicscard: {
            type: String,
            required: true,
        },
        photo: {
            type: String,
        },
        isDeleted: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true,
    },
);

export const Product = model('Product', productSchema)