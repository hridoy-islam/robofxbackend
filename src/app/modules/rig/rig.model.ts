import { Schema, model } from 'mongoose';
import { TRig } from './rig.interface';

const rigSchema = new Schema<TRig>({
  userid: {
    type: Schema.Types.ObjectId,
    required: [true, 'User Id is required'],
    ref: 'User',
  },
  gpu: { type: String },
  status: { type: String },
  temp: { type: String },
  speed: { type: String },
  load: { type: String },
  power: { type: String },
  efficiency: { type: String },
  message: { type: String },
});

export const Rig = model('Rig', rigSchema);
