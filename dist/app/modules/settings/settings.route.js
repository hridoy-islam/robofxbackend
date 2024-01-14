"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingsRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const settings_validation_1 = require("./settings.validation");
const settings_controller_1 = require("./settings.controller");
const router = express_1.default.Router();
router.get('/', settings_controller_1.SettingsControllers.getSettings);
// router.post(
//   '/',
//   validateRequest(settingsValidationSchema),
//   SettingsControllers.createSettings,
// );
router.patch('/:id', (0, validateRequest_1.default)(settings_validation_1.settingsValidationSchema), settings_controller_1.SettingsControllers.updateSettings);
exports.SettingsRoutes = router;
