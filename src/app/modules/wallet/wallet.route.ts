import express from 'express';
import { WalletControllers } from './wallet.controller';
import validateRequest from '../../middlewares/validateRequest';
import { walletValidationSchema } from './wallet.validation';
// import auth from '../../middlewares/auth';

const router = express.Router();

router.get('/', WalletControllers.getAllWalletes);
router.get('/:id', WalletControllers.getSingleWallet);
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

router.delete('/:id', WalletControllers.deleteWallet);

// router.get('/', auth('admin', 'user'), WalletControllers.getAllWalletes);
// router.get('/:id', auth('admin', 'user'), WalletControllers.getSingleWallet);
// router.post(
//   '/',
//   auth('admin'),
//   validateRequest(walletValidationSchema),
//   WalletControllers.createWallet,
// );

// router.patch(
//   '/:id',
//   auth('admin'),
//   validateRequest(walletValidationSchema),
//   WalletControllers.updateWallet,
// );

// router.delete('/:id', auth('admin'), WalletControllers.deleteWallet);

export const WalleteRoutes = router;
