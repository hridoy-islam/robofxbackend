import QueryBuilder from '../../builder/QueryBuilder';
import { TWithdraw } from './withdraw.interface';
import { Withdraw } from './withdraw.model';

const createWithDrawToDB = async (payload: TWithdraw) => {
  const result = await Withdraw.create(payload);
  return result;
};

const getAllWithDrawFromDB = async (query: Record<string, unknown>) => {
  const withdrawQuery = new QueryBuilder(
    Withdraw.find().populate('userid'),
    query,
  )
    .filter()
    .sort()
    .paginate()
    .fields();

  const meta = await withdrawQuery.countTotal();
  const result = await withdrawQuery.modelQuery;

  return {
    meta,
    result,
  };
};

const getSingleWithDrawFromDB = async (id: string) => {
  const result = await Withdraw.findById(id).populate('userid');

  return result;
};

const updateWithdrawIntoDB = async (
  id: string,
  payload: Partial<TWithdraw>,
) => {
  const result = await Withdraw.findByIdAndUpdate(id, payload);
  return result;
};

export const WithdrawServices = {
  createWithDrawToDB,
  getAllWithDrawFromDB,
  getSingleWithDrawFromDB,
  updateWithdrawIntoDB,
};
