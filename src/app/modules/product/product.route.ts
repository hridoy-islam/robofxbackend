import express from 'express';
import { ProductControllers } from './product.controller';
import validateRequest from '../../middlewares/validateRequest';
import { productValidation } from './product.validation';
import auth from '../../middlewares/auth';

const router = express.Router();

router.get('/', auth('admin', 'user'), ProductControllers.getAllproduct);
router.get('/:id', auth('admin', 'user'), ProductControllers.getSingleProduct);
router.post(
  '/',
  auth('admin'),
  validateRequest(productValidation.createProductValidationSchema),
  ProductControllers.createProduct,
);
router.patch(
  '/:id',
  auth('admin'),
  validateRequest(productValidation.updateProductValidationSchema),
  ProductControllers.updateProduct,
);

export const ProductRoutes = router;
