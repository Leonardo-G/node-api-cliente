import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { RegisterClassDTO, UserLoginDTO } from '../dto/auth.dto';
import { AuthService } from '../service/auth.service';
import { AuthGuard } from '../../common/guards/auth.guard';
import { ValidUser } from 'src/common/guards/valid-user.guard';
import { Request } from 'express';

@Controller('auth')
export class AuthController {

    constructor( private authService: AuthService ){}

    @Post('register')
    registerUser( @Body() userObject: RegisterClassDTO ){
        
        return this.authService.registerUser( userObject );
    }

    //Comprobar si tenemos el token valido.
    @Post('validate')
    @UseGuards( AuthGuard, ValidUser )
    validateToken( @Req() request: Request ) {
        const user = request['user']
        return {
            usuario: user,
            token: this.authService.signToken( user._id )
        }
    }

    @Post('login')
    loginUser( @Body() userObject: UserLoginDTO ){
        return this.authService.loginUser( userObject );
    }
}

