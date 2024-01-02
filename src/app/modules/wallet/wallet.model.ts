import { Schema, model } from 'mongoose';
import { TWallet } from './wallet.interface';

const walleteSchema = new Schema<TWallet>({
  name: {
    type: String,
    required: [true, 'Wallet name required'],
    unique: true,
  },
});

export const Wallet = model('Wallet', walleteSchema);
