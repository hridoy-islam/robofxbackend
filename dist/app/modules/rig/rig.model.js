"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rig = void 0;
const mongoose_1 = require("mongoose");
const rigSchema = new mongoose_1.Schema({
    userid: { type: mongoose_1.Schema.Types.ObjectId, required: [true, "User Id is required"] },
    gpu: { type: String },
    status: { type: String },
    temp: { type: String },
    speed: { type: String },
    load: { type: String },
    power: { type: String },
    efficiency: { type: String },
    message: { type: String }
});
exports.Rig = (0, mongoose_1.model)('Rig', rigSchema);
