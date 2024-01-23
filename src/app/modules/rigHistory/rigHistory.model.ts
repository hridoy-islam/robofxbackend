// models/serviceModel.ts
import { Schema, model } from 'mongoose';
import { TRigHistory } from './rigHistory.interface';

const rigHistorySchema = new Schema<TRigHistory>(
  {
    rigid: { type: Schema.Types.ObjectId, required: true, ref: 'Rig' },
    userid: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
    pauseTime: { type: Date, required: true },
    startTime: { type: Date },
    duration: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  },
);

const RigHistory = model('RigHistory', rigHistorySchema);

export default RigHistory;
