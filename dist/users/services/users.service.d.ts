import { Model } from 'mongoose';
import { UserDocument } from '../schemas/user.schema';
import { RegisterClassDTO, UserLoginDTO } from 'src/auth/dto/auth.dto';
export declare class UsersService {
    private userModel;
    constructor(userModel: Model<UserDocument>);
    isExistUser(email: string): Promise<"EXISTS" | null>;
    newUser(user: RegisterClassDTO): Promise<UserDocument>;
    getUser(userObject: UserLoginDTO): Promise<UserDocument | null>;
}
