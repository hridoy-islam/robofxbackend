import express  from 'express';
import { ProductControllers } from './product.controller';

const router = express.Router();

router.get('/', ProductControllers.getAllproduct)
router.get('/:id', ProductControllers.getSingleProduct)
router.post('/', ProductControllers.createProduct)
router.patch('/:id', ProductControllers.updateProduct)
router.delete('/:id', ProductControllers.deleteProduct)


export const ProductRoutes = router