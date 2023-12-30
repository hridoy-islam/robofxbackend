import { TWithdraw } from "./withdraw.interface";
import { Withdraw } from "./withdraw.model";

const createWithDrawToDB =async (payload:TWithdraw) => {
    const result = await Withdraw.create(payload)
    return result;
}

const getAllWithDrawFromDB =async () => {
    const result = await Withdraw.find()
    return result;
}

const getSingleWithDrawFromDB =async (id:string) => {
    const result = await Withdraw.findById(id)
    return result;
}

const updateWithdrawIntoDB = async(id : string, payload: Partial<TWithdraw>) => {
    const result = await Withdraw.findByIdAndUpdate(id, payload)
    return result;
}


export const WithdrawServices = {
    createWithDrawToDB,
    getAllWithDrawFromDB,
    getSingleWithDrawFromDB,
    updateWithdrawIntoDB
}
