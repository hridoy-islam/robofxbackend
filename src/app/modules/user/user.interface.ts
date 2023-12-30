/* eslint-disable no-unused-vars */
import { Model } from 'mongoose';
import { USER_ROLE } from './user.constant';

export type TUserPersonal = {
  firstName : string;
  lastName : string;
  email: string;
  phone: string;
}
export type TUserContact = {
  street: string;
  city: string;
  zipcode : string;
  country: string;
}

export type TUserBilling ={
  street: string;
  city: string;
  zipcode : string;
  country: string;
}

export interface TUser {
  email: string;
  password: string;
  status: 'pending' | 'approved' | 'blocked';
  isDeleted: boolean;
  photo: string;
  address: string;
  agreement: string;
  personal_information: TUserPersonal;
  contact_information: TUserContact;
  billing_information: TUserBilling;
}

// export interface UserModel extends Model<TUser> {
//   //instance methods for checking if the user exist
//   isUserExistsByCustomId(id: string): Promise<TUser>;
//   //instance methods for checking if passwords are matched
//   isPasswordMatched(
//     plainTextPassword: string,
//     hashedPassword: string,
//   ): Promise<boolean>;
//   isJWTIssuedBeforePasswordChanged(
//     passwordChangedTimestamp: Date,
//     jwtIssuedTimestamp: number,
//   ): boolean;
// }

export type TUserRole = keyof typeof USER_ROLE;
