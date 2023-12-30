import { Types } from "mongoose";

export type TRig = {
    userid: Types.ObjectId;
    gpu: string;
    status: string;
    temp: string;
    speed: string; 
    load: string; 
    power: string; 
    efficiency: string; 
    message: string;
}