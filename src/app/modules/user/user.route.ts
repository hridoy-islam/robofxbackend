/* eslint-disable @typescript-eslint/no-explicit-any */
import express from 'express';
import { UserControllers } from './user.controller';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { UserValidation } from './user.validation';

const router = express.Router();
router.get('/',  UserControllers.getAllUser);
router.get('/:id',  UserControllers.getSingleUser);

router.patch('/:id',  UserControllers.updateUser);

router.patch('/:id/wallets/:wallet_id', validateRequest(UserValidation.userValidationSchema), UserControllers.updateWallet);
router.patch('/:id/wallets', validateRequest(UserValidation.userWalletSchema), UserControllers.createWallet);

export const UserRoutes = router;
