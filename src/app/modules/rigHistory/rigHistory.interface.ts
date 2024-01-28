import { Types } from 'mongoose';

export type TRigHistory = {
  rigid: Types.ObjectId;
  userid: Types.ObjectId;
  pauseTime: Date;
  startTime?: Date;
  duration?: number;
  payouts?: number;
};
