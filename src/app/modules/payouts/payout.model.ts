import { Schema, model } from 'mongoose';
import { TPayout } from './payout.interface';

const payoutSchema = new Schema<TPayout>(
  {
    rigid: { type: Schema.Types.ObjectId, required: true, ref: 'Rig' },
    userid: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
    amount: { type: Number },
  },
  {
    timestamps: true,
  },
);

export const Payout = model('Payout', payoutSchema);
