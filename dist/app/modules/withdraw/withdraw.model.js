"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Withdraw = void 0;
const mongoose_1 = require("mongoose");
const withdrawSchema = new mongoose_1.Schema({
    userid: { type: mongoose_1.Schema.Types.ObjectId, required: true },
    btc: { type: String, required: [true, 'BTC is required'] },
    ammount: { type: Number, required: [true, 'Ammount is required'] },
    bank: { type: String, required: [true, 'Bank is required'] },
    speed: { type: String, required: [true, 'Speed is required'] },
    requestDate: { type: String, required: [true, 'Request Date is required'] },
    status: { type: String, default: 'pending' },
    efficiency: { type: String, required: [true, 'efficiency is required'] },
    message: { type: String, required: [true, 'message is required'] }
});
exports.Withdraw = (0, mongoose_1.model)('Withdraw', withdrawSchema);
