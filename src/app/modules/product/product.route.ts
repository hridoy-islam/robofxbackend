import express  from 'express';
import { ProductControllers } from './product.controller';
import validateRequest from '../../middlewares/validateRequest';
import { productValidation } from './product.validation';

const router = express.Router();

router.get('/', ProductControllers.getAllproduct)
router.get('/:id', ProductControllers.getSingleProduct)
router.post('/', validateRequest(productValidation.createProductValidationSchema), ProductControllers.createProduct)
router.patch('/:id', validateRequest(productValidation.updateProductValidationSchema), ProductControllers.updateProduct)


export const ProductRoutes = router