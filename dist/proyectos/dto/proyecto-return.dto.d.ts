import { Types } from "mongoose";
export declare class ProyectosReturnDTO {
    _id: Types.ObjectId;
    nombre: string;
    creador: Types.ObjectId;
    creado: Date;
}
