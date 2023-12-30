import { TOrder } from "./order.interface";
import { Order } from "./order.model";

const createOrderToDB = async (payload: TOrder) => {
    const newOrder = await Order.create(payload);
    return newOrder
}

const getAllOrdersFromDB =async () => {
    const allOrders = await Order.find();
    return allOrders
}

const getSingleOrderFromDB = async (id:string) => {
    const result = await Order.findById(id)
    return result;
}

const updateOrderIntoDB = async(id: string, payload: Partial<TOrder>) => {

}

const deleteOrderFromDB = async(id: string) => {
    const result = await Order.findById(id)
    return result;
}


export const OrderServices = {
    createOrderToDB,
    getAllOrdersFromDB,
    getSingleOrderFromDB,
    updateOrderIntoDB,
    deleteOrderFromDB
}