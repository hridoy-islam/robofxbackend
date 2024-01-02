import { Schema, model } from 'mongoose';
import { TSettings } from './settings.interface';

const settingsSchema = new Schema<TSettings>({
  usd: {type: Number, default: 0},
  inr: {type: Number, default: 0},
  btc: {type: Number, default: 0}
});

export const Setting = model('Setting', settingsSchema);
