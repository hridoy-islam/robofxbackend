import { Types } from 'mongoose';

export type TRigHistory = {
  rigid: Types.ObjectId;
  userid: Types.ObjectId;
  pauseTime: number;
  startTime?: number;
  duration?: number;
  payouts?: number;
};
