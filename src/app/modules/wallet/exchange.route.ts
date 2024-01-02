import express from 'express';
import { ExchangeControllers } from './wallet.controller';
import validateRequest from '../../middlewares/validateRequest';
import { exchangeValidationSchema } from './wallet.validation';

const router = express.Router();

router.get('/', ExchangeControllers.getAllExchanges);
router.post(
  '/',
  validateRequest(exchangeValidationSchema),
  ExchangeControllers.createExchange,
);

router.patch(
  '/:id',
  validateRequest(exchangeValidationSchema),
  ExchangeControllers.updateExchange,
);

export const EchangeRoutes = router;
