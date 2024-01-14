"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoiceRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const invoice_controller_1 = require("./invoice.controller");
const invoice_validation_1 = require("./invoice.validation");
const router = express_1.default.Router();
router.get('/', invoice_controller_1.InvoiceControllers.getAllInvoice);
router.get('/:id', invoice_controller_1.InvoiceControllers.getSingleInvoice);
router.post('/', (0, validateRequest_1.default)(invoice_validation_1.createInvoiceValidationSchema), invoice_controller_1.InvoiceControllers.createInvoice);
router.patch('/:id', (0, validateRequest_1.default)(invoice_validation_1.updateInvoiceValidationSchema), invoice_controller_1.InvoiceControllers.updateInvoice);
exports.InvoiceRoutes = router;
