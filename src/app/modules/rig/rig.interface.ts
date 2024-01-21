import { Types } from 'mongoose';

export type TRig = {
  userid: Types.ObjectId;
  rigName: string;
  gpu: string;
  status: string;
  temp: string;
  fan: string;
  load: string;
  power: string;
  efficiency: number;
  message: string;
};
