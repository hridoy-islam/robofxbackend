/* eslint-disable @typescript-eslint/no-this-alias */
import bcrypt from 'bcrypt';
import { Schema, model } from 'mongoose';
import config from '../../config';
import { UserStatus } from './user.constant';
import { TUser, UserModel } from './user.interface';

const userSchema = new Schema<TUser, UserModel>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      select: 0,
    },
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
    },
    status: {
      type: String,
      enum: UserStatus,
      default: 'pending',
    },
    message: {
      type: String,
      default: 'Your Account is Pending Activation',
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    agreement: { type: String },
    personal_information: {
      firstName: { type: String },
      lastName: { type: String },
      email: { type: String },
      phone: { type: String },
      photo: { type: String },
    },
    contact_information: {
      address: { type: String },
      state: { type: String },
      city: { type: String },
      zipcode: { type: String },
      country: { type: String },
    },
    billing_information: {
      address: { type: String },
      state: { type: String },
      city: { type: String },
      zipcode: { type: String },
      country: { type: String },
    },
    currency: {
      type: String,
      default: 'USD',
    },
    primary_account: {
      type: String,
      default: 'USD',
    },
    wallets: [
      {
        exchange: { type: String },
        wallet: { type: String },
        account: { type: String },
      },
    ],
    balance: { type: Number },
    grossBalance: { type: Number },
    btc: { type: Number },
    profit: { type: Number },
  },
  {
    timestamps: true,
  },
);

userSchema.pre('save', async function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this; // doc
  // hashing password and save into DB

  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds),
  );

  next();
});

// set '' after saving password
userSchema.post('save', function (doc, next) {
  doc.password = '';
  next();
});

userSchema.statics.isUserExists = async function (email: string) {
  return await User.findOne({ email }).select('+password');
};

userSchema.statics.isPasswordMatched = async function (
  plainTextPassword,
  hashedPassword,
) {
  return await bcrypt.compare(plainTextPassword, hashedPassword);
};

userSchema.statics.isJWTIssuedBeforePasswordChanged = function (
  passwordChangedTimestamp: Date,
  jwtIssuedTimestamp: number,
) {
  const passwordChangedTime =
    new Date(passwordChangedTimestamp).getTime() / 1000;
  return passwordChangedTime > jwtIssuedTimestamp;
};

export const User = model<TUser, UserModel>('User', userSchema);
