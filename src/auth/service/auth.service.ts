import { BadRequestException, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt'

import { RegisterClassDTO } from '../dto/auth.dto';
import { UsersService } from 'src/users/services/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor( 
        private usersService: UsersService,
        private jwtService: JwtService
    ){}

    signToken( _id: string ): string{
        const payload = {
            usuario: {
                id: _id
            }
        }

        return this.jwtService.sign( payload );
    }
    
    async registerUser( user: RegisterClassDTO ){
        
        const isExist = await this.usersService.isExistUser( user.email );
        console.log(isExist)
        if ( isExist ) {
            throw new BadRequestException( `El usuario con el email ${ user.email } ya existe` );
        }
        
        const hashPassword = await bcrypt.hash( user.password, 10 );
        console.log(hashPassword)
        const newUser = await this.usersService.newUser({
            nombre: user.nombre,
            email: user.email,
            password: hashPassword
        })
        
        return {
            token: this.signToken( newUser._id )
        };
    }
}
