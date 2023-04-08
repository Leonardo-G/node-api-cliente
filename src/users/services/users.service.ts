import { InjectModel } from '@nestjs/mongoose'
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

import { User, UserDocument } from '../schemas/user.schema';
import { RegisterClassDTO } from 'src/auth/dto/auth.dto';

@Injectable()
export class UsersService {
    constructor( @InjectModel( User.name ) private userModel: Model<UserDocument> ){}

    async isExistUser( email: string ): Promise<"EXISTS" | null> {
        const user = await this.userModel.findOne({ email }).exec();
        
        if ( user ) return "EXISTS"
        
        return null;
    }

    async newUser( user: RegisterClassDTO ): Promise<UserDocument>{
        const newUser = new this.userModel( user ); 
        await newUser.save()
        return newUser
    }
}
