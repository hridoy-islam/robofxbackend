import httpStatus from 'http-status';
import QueryBuilder from '../../builder/QueryBuilder';
import AppError from '../../errors/AppError';
import { TOrder } from './order.interface';
import { Order } from './order.model';

const createOrderToDB = async (payload: TOrder) => {
  const newOrder = await Order.create(payload);
  return newOrder;
};

const getAllOrdersFromDB = async (query: Record<string, unknown>) => {
  const orderQuery = new QueryBuilder(
    Order.find().populate('userid').populate('productid'),
    query,
  )
    .filter()
    .sort()
    .paginate()
    .fields();

  const meta = await orderQuery.countTotal();
  const result = await orderQuery.modelQuery;

  return {
    meta,
    result,
  };
};

const getSingleOrderFromDB = async (id: string) => {
  const result = await Order.findById(id)
    .populate('productid')
    .populate('userid');
  return result;
};

const updateOrderIntoDB = async (id: string, payload: Partial<TOrder>) => {
  const order = await Order.findById(id);
  if (!order) {
    throw new AppError(httpStatus.NOT_FOUND, 'Order Not Found');
  }
  const result = await Order.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

const deleteOrderFromDB = async (id: string) => {
  const result = await Order.findById(id);
  return result;
};

export const OrderServices = {
  createOrderToDB,
  getAllOrdersFromDB,
  getSingleOrderFromDB,
  updateOrderIntoDB,
  deleteOrderFromDB,
};
