import { 
    BadRequestException,
    CanActivate, 
    ExecutionContext, 
    Injectable, 
} from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";

import { Model } from "mongoose";

import { User, UserDocument } from "src/users/schemas/user.schema";

@Injectable()
export class ValidUser implements CanActivate {

    constructor( @InjectModel( User.name ) private userModel: Model<UserDocument> ){}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        
        const request = context.switchToHttp().getRequest();

        //Comprobar si existe el usuario
        const user = await this.userModel.findById( request['user'].usuario._id ).select("-password -__v").exec();
        if ( !user ){
            throw new BadRequestException("Permisos no permitido");
        }

        request['user'] = user;
        return true;
    }
}
