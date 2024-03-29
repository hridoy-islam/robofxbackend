import { Router } from 'express';
import { UserRoutes } from '../modules/user/user.route';
import { ProductRoutes } from '../modules/product/product.route';
import { OrderRoutes } from '../modules/order/order.route';
import { RigRoutes } from '../modules/rig/rig.route';
import { WithdrawRoutes } from '../modules/withdraw/withdraw.route';
import { AuthRoutes } from '../modules/auth/auth.router';
import { EchangeRoutes } from '../modules/exchange/exchange.route';
import { WalleteRoutes } from '../modules/wallet/wallet.route';
import { SettingsRoutes } from '../modules/settings/settings.route';
import { InvoiceRoutes } from '../modules/invoice/invoice.route';
import { RigHistoryRoutes } from '../modules/rigHistory/rigHistory.route';
import { PayoutRoutes } from '../modules/payouts/payout.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/products',
    route: ProductRoutes,
  },
  {
    path: '/orders',
    route: OrderRoutes,
  },
  {
    path: '/rigs',
    route: RigRoutes,
  },
  {
    path: '/withdraws',
    route: WithdrawRoutes,
  },
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/exchange',
    route: EchangeRoutes,
  },
  {
    path: '/wallet',
    route: WalleteRoutes,
  },
  {
    path: '/settings',
    route: SettingsRoutes,
  },
  {
    path: '/invoices',
    route: InvoiceRoutes,
  },
  {
    path: '/history',
    route: RigHistoryRoutes,
  },
  {
    path: '/payout',
    route: PayoutRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
