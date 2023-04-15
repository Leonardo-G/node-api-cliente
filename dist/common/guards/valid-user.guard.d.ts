import { CanActivate, ExecutionContext } from "@nestjs/common";
import { Model } from "mongoose";
import { UserDocument } from "src/users/schemas/user.schema";
export declare class ValidUser implements CanActivate {
    private userModel;
    constructor(userModel: Model<UserDocument>);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
