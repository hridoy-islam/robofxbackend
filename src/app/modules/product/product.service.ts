import { TProduct } from "./product.interface";
import { Product } from "./product.model";

const createProductToDB = async (payload: TProduct) => {
    const newProduct = await Product.create(payload);
    return newProduct
}

const getAllProductsFromDB =async () => {
    const allProducts = await Product.find();
    return allProducts
}

const getSingleProductFromDB = async (id:string) => {
    const product = await Product.findById(id)
    return product;
}

const updateProductIntoDB = async(id: string, payload: Partial<TProduct>) => {

}

const deleteProductFromDB = async(id: string) => {
    const product = await Product.findById(id)
    return product;
}


export const ProductServices = {
    createProductToDB,
    getAllProductsFromDB,
    getSingleProductFromDB,
    updateProductIntoDB,
    deleteProductFromDB
}