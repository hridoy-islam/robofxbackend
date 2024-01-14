"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoutes = void 0;
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("./product.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const product_validation_1 = require("./product.validation");
const router = express_1.default.Router();
router.get('/', product_controller_1.ProductControllers.getAllproduct);
router.get('/:id', product_controller_1.ProductControllers.getSingleProduct);
router.post('/', (0, validateRequest_1.default)(product_validation_1.productValidation.createProductValidationSchema), product_controller_1.ProductControllers.createProduct);
router.patch('/:id', (0, validateRequest_1.default)(product_validation_1.productValidation.updateProductValidationSchema), product_controller_1.ProductControllers.updateProduct);
exports.ProductRoutes = router;
