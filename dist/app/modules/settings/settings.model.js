"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Setting = void 0;
const mongoose_1 = require("mongoose");
const settingsSchema = new mongoose_1.Schema({
    usd: { type: Number, default: 0 },
    inr: { type: Number, default: 0 },
    btc: { type: Number, default: 0 }
});
exports.Setting = (0, mongoose_1.model)('Setting', settingsSchema);
