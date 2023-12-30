import { TRig } from "./rig.interface";
import { Rig } from "./rig.model";

const createRigIntoDB = async(payload: TRig) => {
    const result = await Rig.create(payload)
    return result
}

const getSingleRigFromDB = async(id: string) => {
    const result = await Rig.findById(id);
    return result
}


const updateRigIntoDB = async(id: string, payload: Partial<TRig>)=> {
    const result = await Rig.findByIdAndUpdate(id, payload)
    return result;
}

export const RigServices = {
    createRigIntoDB,
    getSingleRigFromDB,
    updateRigIntoDB
}