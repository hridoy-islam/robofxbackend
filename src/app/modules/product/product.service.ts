import httpStatus from 'http-status';
import QueryBuilder from '../../builder/QueryBuilder';
import AppError from '../../errors/AppError';
import { TProduct } from './product.interface';
import { Product } from './product.model';

const createProductToDB = async (payload: TProduct) => {
  const newProduct = await Product.create(payload);
  return newProduct;
};

const getAllProductsFromDB = async (query: Record<string, unknown>) => {
  const productQuery = new QueryBuilder(Product.find(), query)
    .filter()
    .sort()
    .paginate()
    .fields();

  const meta = await productQuery.countTotal();
  const result = await productQuery.modelQuery;

  return {
    meta,
    result,
  };
};

const getSingleProductFromDB = async (id: string) => {
  const product = await Product.findById(id);
  return product;
};

const updateProductIntoDB = async (id: string, payload: Partial<TProduct>) => {
  const product = await Product.findById(id);
  if (!product) {
    throw new AppError(httpStatus.NOT_FOUND, 'Product Not Found');
  }
  const result = await Product.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

export const ProductServices = {
  createProductToDB,
  getAllProductsFromDB,
  getSingleProductFromDB,
  updateProductIntoDB,
};
