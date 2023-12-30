import { Schema, model } from "mongoose";
import { TWithdraw } from "./withdraw.interface";


const withdrawSchema = new Schema<TWithdraw>({
    userid : {type: Schema.Types.ObjectId, required: true},
    btc : {type: String, required: [true, 'BTC is required']},
    ammount: {type: Number, required: [true, 'Ammount is required']},
    bank: {type: String, required: [true, 'Bank is required']},
    speed: {type: String, required: [true, 'Speed is required']},
    requestDate : {type: String, required: [true, 'Request Date is required']},
    status:{type: String, default : 'pending'},
    efficiency: {type: String, required: [true, 'efficiency is required']},
    message: {type: String, required: [true, 'message is required']}
})

export const Withdraw = model('Withdraw', withdrawSchema)