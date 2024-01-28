import express from 'express';
import { WithdrawControllers } from './withdraw.controller';
import validateRequest from '../../middlewares/validateRequest';
import { withdrawValidationSchema } from './withdraw.validation';
import auth from '../../middlewares/auth';

const router = express.Router();

router.get('/', auth('admin', 'user'), WithdrawControllers.getAllWithdraw);
router.get(
  '/:id',
  auth('admin', 'user'),
  WithdrawControllers.getSingleWithdraw,
);
router.post(
  '/',
  auth('admin', 'user'),
  validateRequest(withdrawValidationSchema),
  WithdrawControllers.createWithdraw,
);
router.patch('/:id', auth('admin'), WithdrawControllers.updateWithdraw);

router.post('/:id/:userid', auth('admin'), WithdrawControllers.approveWithDraw);

export const WithdrawRoutes = router;
