import express from 'express';
import { ExchangeControllers } from './exchange.controller';
import validateRequest from '../../middlewares/validateRequest';
import { exchangeValidationSchema } from './exchange.validation';

const router = express.Router();

router.get('/', ExchangeControllers.getAllExchanges);
router.get('/:id', ExchangeControllers.getSingleExchanges);
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
