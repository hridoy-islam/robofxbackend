import { Schema, model } from 'mongoose';
import { TWithdraw } from './withdraw.interface';

const withdrawSchema = new Schema<TWithdraw>({
  userid: { type: Schema.Types.ObjectId, required: true }, //
  btc: { type: String, required: [true, 'BTC is required'] }, //
  amount: { type: Number, required: [true, 'amount is required'] }, //
  bank: { type: String },
  speed: { type: String },
  requestDate: { type: String }, //
  status: { type: String, default: 'pending' },
  efficiency: { type: String },
  message: { type: String },
});

export const Withdraw = model('Withdraw', withdrawSchema);
