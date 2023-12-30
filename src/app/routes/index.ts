import { Router } from 'express';
import { UserRoutes } from '../modules/user/user.route';
import { ProductRoutes } from '../modules/product/product.route';
import { OrderRoutes } from '../modules/order/order.route';
import { RigRoutes } from '../modules/rig/rig.route';
import { WithdrawRoutes } from '../modules/withdraw/withdraw.route';

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
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
