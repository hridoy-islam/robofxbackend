"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Exchange = void 0;
const mongoose_1 = require("mongoose");
const exchangeSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, 'Exchange name required'],
        unique: true,
    },
});
exports.Exchange = (0, mongoose_1.model)('Exchange', exchangeSchema);
