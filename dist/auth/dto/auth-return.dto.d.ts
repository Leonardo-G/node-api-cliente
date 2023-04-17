import { Types } from "mongoose";
declare class User {
    _id: Types.ObjectId;
    nombre: string;
    email: string;
}
export declare class TokenDTO {
    token: string;
}
export declare class AuthReturnDTO {
    usuario: User;
    token: TokenDTO;
}
export {};
