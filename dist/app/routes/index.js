"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_route_1 = require("../modules/user/user.route");
const product_route_1 = require("../modules/product/product.route");
const order_route_1 = require("../modules/order/order.route");
const rig_route_1 = require("../modules/rig/rig.route");
const withdraw_route_1 = require("../modules/withdraw/withdraw.route");
const auth_router_1 = require("../modules/auth/auth.router");
const exchange_route_1 = require("../modules/exchange/exchange.route");
const wallet_route_1 = require("../modules/wallet/wallet.route");
const settings_route_1 = require("../modules/settings/settings.route");
const invoice_route_1 = require("../modules/invoice/invoice.route");
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: '/users',
        route: user_route_1.UserRoutes,
    },
    {
        path: '/products',
        route: product_route_1.ProductRoutes,
    },
    {
        path: '/orders',
        route: order_route_1.OrderRoutes,
    },
    {
        path: '/rigs',
        route: rig_route_1.RigRoutes,
    },
    {
        path: '/withdraws',
        route: withdraw_route_1.WithdrawRoutes,
    },
    {
        path: '/auth',
        route: auth_router_1.AuthRoutes,
    },
    {
        path: '/exchange',
        route: exchange_route_1.EchangeRoutes,
    },
    {
        path: '/wallet',
        route: wallet_route_1.WalleteRoutes,
    },
    {
        path: '/settings',
        route: settings_route_1.SettingsRoutes,
    },
    {
        path: '/invoices',
        route: invoice_route_1.InvoiceRoutes,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
