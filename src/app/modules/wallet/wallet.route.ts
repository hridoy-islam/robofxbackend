import express from 'express';
import {  WalletControllers } from './wallet.controller';
import validateRequest from '../../middlewares/validateRequest';
import { walletValidationSchema } from './wallet.validation';

const router = express.Router();

router.get('/', WalletControllers.getAllWalletes);
router.get('/:id', WalletControllers.getSingleWallet)
router.post(
  '/',
  validateRequest(walletValidationSchema),
  WalletControllers.createWallet,
);

router.patch(
  '/:id',
  validateRequest(walletValidationSchema),
  WalletControllers.updateWallet,
);

router.delete(
  '/:id',
  WalletControllers.deleteWallet,
);

export const WalleteRoutes = router;
