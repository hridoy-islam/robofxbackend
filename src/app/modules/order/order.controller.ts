import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { OrderServices } from "./order.service";

const createOrder = catchAsync(async(req, res)=> {
    const result = await OrderServices.createOrderToDB(req.body)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Order is created succesfully',
        data: result,
      });
})

const getAllOrder = catchAsync(async(req, res)=> {
    const result = await OrderServices.getAllOrdersFromDB();
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Order retrived succesfully',
        data: result,
      });
})

const getSingleOrder = catchAsync(async(req, res)=> {
    const {OrderId} = req.params
    const result = await OrderServices.getSingleOrderFromDB(OrderId);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Order retrived succesfully',
        data: result,
      });
})

const updateOrder = catchAsync(async(req, res)=> {
    const {OrderId} = req.params
    const {payload} =  req.body
    const result = await OrderServices.updateOrderIntoDB(OrderId, payload);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Order updated succesfully',
        data: result,
      });
})


const deleteOrder = catchAsync(async(req, res)=> {
    const {OrderId} = req.params
    const result = await OrderServices.deleteOrderFromDB(OrderId);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Order deleted succesfully',
        data: result,
      });
})

export const OrderControllers = {
    createOrder,
    getAllOrder,
    getSingleOrder,
    updateOrder,
    deleteOrder
}
