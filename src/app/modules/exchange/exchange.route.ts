import express from 'express';
import { ExchangeControllers } from './exchange.controller';
import validateRequest from '../../middlewares/validateRequest';
import { exchangeValidationSchema } from './exchange.validation';
import auth from '../../middlewares/auth';

const router = express.Router();

router.get('/', ExchangeControllers.getAllExchanges);
router.get(
  '/:id',

  ExchangeControllers.getSingleExchanges,
);
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

router.delete('/:id', auth('admin'), ExchangeControllers.deleteExchange);

// router.get('/', auth('admin', 'user'), ExchangeControllers.getAllExchanges);
// router.get(
//   '/:id',
//   auth('admin', 'user'),
//   ExchangeControllers.getSingleExchanges,
// );
// router.post(
//   '/',
//   auth('admin'),
//   validateRequest(exchangeValidationSchema),
//   ExchangeControllers.createExchange,
// );

// router.patch(
//   '/:id',
//   auth('admin'),
//   validateRequest(exchangeValidationSchema),
//   ExchangeControllers.updateExchange,
// );

// router.delete('/:id', auth('admin'), ExchangeControllers.deleteExchange);

export const EchangeRoutes = router;
