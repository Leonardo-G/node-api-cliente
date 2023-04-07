import { InjectModel } from '@nestjs/mongoose'
import { Injectable } from '@nestjs/common';
import { User } from '../schemas/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
    constructor( @InjectModel( User.name ) private userModel: Model<User> ){}

    getUsers(){
        const users = this.userModel.find({});
        
        return users;
    }
}
