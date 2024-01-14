"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithdrawRoutes = void 0;
const express_1 = __importDefault(require("express"));
const withdraw_controller_1 = require("./withdraw.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const withdraw_validation_1 = require("./withdraw.validation");
const router = express_1.default.Router();
router.get('/', withdraw_controller_1.WithdrawControllers.getAllWithdraw);
router.get('/:id', withdraw_controller_1.WithdrawControllers.getSingleWithdraw);
router.post('/', (0, validateRequest_1.default)(withdraw_validation_1.withdrawValidationSchema), withdraw_controller_1.WithdrawControllers.createWithdraw);
router.patch('/:id', withdraw_controller_1.WithdrawControllers.updateWithdraw);
exports.WithdrawRoutes = router;
