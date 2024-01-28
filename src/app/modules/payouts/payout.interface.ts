import { Types } from 'mongoose';

export type TPayout = {
  rigid?: Types.ObjectId;
  userid?: Types.ObjectId;
  amount?: number;
};
