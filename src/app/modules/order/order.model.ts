import { Schema, model } from "mongoose";
import { TOrder } from "./order.interface";

const orderSchema = new Schema<TOrder>(
    {
        productid: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: "Product"
        },
        userid: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: "User"
        },
        status: {
            type: String,
            default: "pending"
        }
    },
    {
        timestamps: true,
    },
);

export const Order = model('Order', orderSchema)