"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EchangeRoutes = void 0;
const express_1 = __importDefault(require("express"));
const exchange_controller_1 = require("./exchange.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const exchange_validation_1 = require("./exchange.validation");
const router = express_1.default.Router();
router.get('/', exchange_controller_1.ExchangeControllers.getAllExchanges);
router.get('/:id', exchange_controller_1.ExchangeControllers.getSingleExchanges);
router.post('/', (0, validateRequest_1.default)(exchange_validation_1.exchangeValidationSchema), exchange_controller_1.ExchangeControllers.createExchange);
router.patch('/:id', (0, validateRequest_1.default)(exchange_validation_1.exchangeValidationSchema), exchange_controller_1.ExchangeControllers.updateExchange);
exports.EchangeRoutes = router;
