import { Types } from 'mongoose';

export type TWithdraw = {
  userid: Types.ObjectId;
  btc: string;
  amount: number;
  bank?: string;
  speed?: string;
  requestDate: string;
  status?: string;
  efficiency?: string;
  message?: string;
};
