import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { ProductServices } from "./product.service";

const createProduct = catchAsync(async(req, res)=> {
    const result = await ProductServices.createProductToDB(req.body)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Product is created succesfully',
        data: result,
      });
})

const getAllproduct = catchAsync(async(req, res)=> {
    const result = await ProductServices.getAllProductsFromDB();
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Product retrived succesfully',
        data: result,
      });
})

const getSingleProduct = catchAsync(async(req, res)=> {
    const {productId} = req.params
    const result = await ProductServices.getSingleProductFromDB(productId);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Product retrived succesfully',
        data: result,
      });
})

const updateProduct = catchAsync(async(req, res)=> {
    const {productId} = req.params
    const {payload} =  req.body
    const result = await ProductServices.updateProductIntoDB(productId, payload);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Product updated succesfully',
        data: result,
      });
})


const deleteProduct = catchAsync(async(req, res)=> {
    const {productId} = req.params
    const result = await ProductServices.deleteProductFromDB(productId);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Product deleted succesfully',
        data: result,
      });
})

export const ProductControllers = {
    createProduct,
    getAllproduct,
    getSingleProduct,
    updateProduct,
    deleteProduct
}
