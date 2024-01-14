"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wallet = void 0;
const mongoose_1 = require("mongoose");
const walleteSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, 'Wallet name required'],
        unique: true,
    },
});
exports.Wallet = (0, mongoose_1.model)('Wallet', walleteSchema);
