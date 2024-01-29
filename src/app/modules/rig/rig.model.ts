import { Schema, model } from 'mongoose';
import { TRig } from './rig.interface';

const rigSchema = new Schema<TRig>({
  userid: {
    type: Schema.Types.ObjectId,
    required: [true, 'User Id is required'],
  },
  rigName: { type: String },
  gpu: { type: String },
  status: { type: String, default: 'pause' },
  temp: { type: String },
  fan: { type: String },
  load: { type: String },
  power: { type: String },
  efficiency: { type: Number },
  message: { type: String },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

export const Rig = model('Rig', rigSchema);
