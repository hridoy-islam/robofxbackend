import { z } from 'zod';
import { UserStatus } from './user.constant';

const userValidationSchema = z.object({
  pasword: z
    .string({
      invalid_type_error: 'Password must be string',
    })
    .max(20, { message: 'Password can not be more than 20 characters' })
    .optional(),
});

const changeStatusValidationSchema = z.object({
  body: z.object({
    status: z.enum([...UserStatus] as [string, ...string[]]),
  }),
});

const userWalletSchema = z.object({
  body: z.object({
    exchange: z.string(),
    wallet: z.string(),
    account: z.string()
  }),
});

const updateUserWalletSchema = z.object({
  body: z.object({
    exchange: z.string().optional(),
    wallet: z.string().optional(),
    account: z.string().optional()
  }),
});



export const UserValidation = {
  userValidationSchema,
  changeStatusValidationSchema,
  updateUserWalletSchema,
  userWalletSchema
};
