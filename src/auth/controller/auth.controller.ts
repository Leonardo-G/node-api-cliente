import { Body, Controller, Post } from '@nestjs/common';
import { RegisterClassDTO } from '../dto/auth.dto';
import { AuthService } from '../service/auth.service';

@Controller('auth')
export class AuthController {

    constructor( private authService: AuthService ){}

    @Post('register')
    registerUser( @Body() userObject: RegisterClassDTO ){
        
        return this.authService.registerUser( userObject );
    }
}
