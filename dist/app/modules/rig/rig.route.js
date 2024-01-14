"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RigRoutes = void 0;
const express_1 = __importDefault(require("express"));
const rig_controller_1 = require("./rig.controller");
const router = express_1.default.Router();
router.get('/:id', rig_controller_1.RigControllers.getSingleRig);
router.post('/', rig_controller_1.RigControllers.createRig);
router.patch('/:id', rig_controller_1.RigControllers.updateRig);
exports.RigRoutes = router;
