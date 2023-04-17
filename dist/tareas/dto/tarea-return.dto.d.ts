import { Types } from "mongoose";
export declare class TareaReturnDTO {
    _id: Types.ObjectId;
    nombre: string;
    creado: Date;
    proyecto: Types.ObjectId;
}
