import { Schema, model } from 'mongoose';
import { TExchange } from './wallet.interface';

const exchangeSchema = new Schema<TExchange>({
  name: {
    type: String,
    required: [true, 'Exchange name required'],
    unique: true,
  },
});

export const Exchange = model('Exchange', exchangeSchema);
