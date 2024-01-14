"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoutes = void 0;
const express_1 = __importDefault(require("express"));
const authController_1 = require("./authController");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const auth_validation_1 = require("./auth.validation");
const router = express_1.default.Router();
router.post('/login', (0, validateRequest_1.default)(auth_validation_1.AuthValidations.loginValidationSchema), authController_1.AuthControllers.login);
router.post('/create-user', (0, validateRequest_1.default)(auth_validation_1.AuthValidations.createUserValidationSchema), authController_1.AuthControllers.createUser);
router.post('/forget-password', (0, validateRequest_1.default)(auth_validation_1.AuthValidations.forgetPasswordValidationSchema), authController_1.AuthControllers.forgetPassword);
router.post('/reset', (0, validateRequest_1.default)(auth_validation_1.AuthValidations.forgetPasswordValidationSchema), authController_1.AuthControllers.resetPassword);
exports.AuthRoutes = router;
