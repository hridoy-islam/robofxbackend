import express from 'express';
import { WalletControllers } from './wallet.controller';
import validateRequest from '../../middlewares/validateRequest';
import { walletValidationSchema } from './wallet.validation';
import auth from '../../middlewares/auth';
// import auth from '../../middlewares/auth';

const router = express.Router();

router.get('/', auth('admin', 'user'), WalletControllers.getAllWalletes);
router.get('/:id', auth('admin', 'user'), WalletControllers.getSingleWallet);
router.post(
  '/',
  auth('admin', 'user'),
  validateRequest(walletValidationSchema),
  WalletControllers.createWallet,
);

router.patch(
  '/:id',
  auth('admin', 'user'),
  validateRequest(walletValidationSchema),
  WalletControllers.updateWallet,
);

router.delete('/:id', auth('admin', 'user'), WalletControllers.deleteWallet);
export const WalleteRoutes = router;
