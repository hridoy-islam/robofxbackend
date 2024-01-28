import QueryBuilder from '../../builder/QueryBuilder';
import { Payout } from './payout.model';

const getAllPayoutsFromDB = async (query: Record<string, unknown>) => {
  const rigQuery = new QueryBuilder(
    Payout.find().populate('rigid').populate('userid'),
    query,
  )
    .filter()
    .sort()
    .paginate()
    .fields();

  const meta = await rigQuery.countTotal();
  const result = await rigQuery.modelQuery;

  return {
    meta,
    result,
  };
};

export const PayoutServices = {
  getAllPayoutsFromDB,
};
