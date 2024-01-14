"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalleteRoutes = void 0;
const express_1 = __importDefault(require("express"));
const wallet_controller_1 = require("./wallet.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const wallet_validation_1 = require("./wallet.validation");
const router = express_1.default.Router();
router.get('/', wallet_controller_1.WalletControllers.getAllWalletes);
router.get('/:id', wallet_controller_1.WalletControllers.getSingleWallet);
router.post('/', (0, validateRequest_1.default)(wallet_validation_1.walletValidationSchema), wallet_controller_1.WalletControllers.createWallet);
router.patch('/:id', (0, validateRequest_1.default)(wallet_validation_1.walletValidationSchema), wallet_controller_1.WalletControllers.updateWallet);
exports.WalleteRoutes = router;
