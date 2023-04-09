import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import * as bcrypt from 'bcrypt'

import { RegisterClassDTO, UserLoginDTO } from '../dto/auth.dto';
import { UsersService } from 'src/users/services/users.service';

@Injectable()
export class AuthService {

    constructor( 
        private usersService: UsersService,
        private jwtService: JwtService
    ){}

    //Comparar passwords
    async comparePasswords( password: string, hashPassword: string ): Promise<boolean> {
        return await bcrypt.compare( password, hashPassword );
    }

    //Firmar token
    signToken( _id: string ): string{
        const payload = {
            usuario: {
                _id: _id
            }
        }

        return this.jwtService.sign( payload );
    }
    
    async registerUser( user: RegisterClassDTO ){
        
        const isExist = await this.usersService.isExistUser( user.email );
        if ( isExist ) {
            throw new BadRequestException( `El usuario con el email ${ user.email } ya existe` );
        }
        
        const hashPassword = await bcrypt.hash( user.password, 10 );
        const newUser = await this.usersService.newUser({
            nombre: user.nombre,
            email: user.email,
            password: hashPassword
        })
        
        return {
            token: this.signToken( newUser._id )
        };
    }

    async loginUser( userObject: UserLoginDTO ) {
        const user = await this.usersService.getUser( userObject );
        if ( !user ) throw new BadRequestException("Email/Password incorrecto");
        
        const isPassword = await this.comparePasswords( userObject.password, user.password );
        if ( !isPassword ) throw new BadRequestException("Email/Password incorrecto")
        
        return {
            usuario: {
                _id: user._id,
                nombre: user.nombre,
                email: user.email
            },
            token: this.signToken( user._id )
        }
    }

}
