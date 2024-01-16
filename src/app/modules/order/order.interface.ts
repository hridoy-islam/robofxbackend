import { Types } from 'mongoose';

export type TOrder = {
  productid: Types.ObjectId;
  userid: Types.ObjectId;
  status: 'pending' | 'approved' | 'decliend';
  isDeleted: boolean;
};
