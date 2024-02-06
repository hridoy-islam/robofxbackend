/* eslint-disable no-unused-vars */
import { Model, Types } from 'mongoose';
import { USER_ROLE } from './user.constant';

export type TUserPersonal = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  photo: string;
};
export type TUserContact = {
  address: string;
  state: string;
  city: string;
  zipcode: string;
  country: string;
};

export type TUserBilling = {
  address: string;
  state: string;
  city: string;
  zipcode: string;
  country: string;
};

export type TUserWallet = [
  {
    exchange: string;
    wallet: string;
    account: string;
  },
];

export interface TUser {
  _id: Types.ObjectId;
  email: string;
  password: string;
  role: 'user' | 'admin';
  status: 'pending' | 'approved';
  isDeleted: boolean;
  agreement: string;
  personal_information: TUserPersonal;
  contact_information: TUserContact;
  billing_information: TUserBilling;
  currency: string;
  primary_account: Types.ObjectId;
  wallets?: TUserWallet;
  message?: string;
  balance?: number;
  grossBalance?: number;
  btc?: number;
  profit?: number;
}

export interface UserModel extends Model<TUser> {
  //instance methods for checking if the user exist
  isUserExists(email: string): Promise<TUser>;
  //instance methods for checking if passwords are matched
  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string,
  ): Promise<boolean>;
  // isJWTIssuedBeforePasswordChanged(
  //   passwordChangedTimestamp: Date,
  //   jwtIssuedTimestamp: number,
  // ): boolean;
}

export type TUserRole = keyof typeof USER_ROLE;
