import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { RegisterClassDTO, UserLoginDTO } from '../dto/auth.dto';
import { AuthService } from '../service/auth.service';
import { AuthGuard } from '../../common/guards/auth.guard';
import { ValidUser } from 'src/common/guards/valid-user.guard';
import { Request } from 'express';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthReturnDTO, TokenDTO } from '../dto/auth-return.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {

    constructor( private authService: AuthService ){}

    @Post('register')
    @ApiResponse({
        status: 201,
        type: TokenDTO
    })
    registerUser( @Body() userObject: RegisterClassDTO ){
        
        return this.authService.registerUser( userObject );
    }

    //Comprobar si tenemos el token valido.
    @Post('validate')
    @ApiResponse({
        status: 201,
        type: AuthReturnDTO
    })
    @UseGuards( AuthGuard, ValidUser )
    validateToken( @Req() request: Request ) {
        const user = request['user'];
        return {
            usuario: user,
            token: this.authService.signToken( user._id )
        }
    }

    @Post('login')
    @ApiResponse({
        status: 201,
        type: AuthReturnDTO
    })
    loginUser( @Body() userObject: UserLoginDTO ){
        return this.authService.loginUser( userObject );
    }
}

