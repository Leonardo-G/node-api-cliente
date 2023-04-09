import { 
    CanActivate, 
    ExecutionContext, 
    Injectable, 
    UnauthorizedException 
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

import { authConstants } from "../../auth/constants";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor( private jwtService: JwtService ){}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();
        const token = request.headers.authorization;

        if ( !token ) throw new UnauthorizedException("No se encuentra el token");
        try {
            const payload = await this.jwtService.verifyAsync( token, {
                secret: authConstants.secret
            })
            
            //Estamos asignando 'user' al objeto REQUEST,
            //para acceder en los controladores de ruta.
            request['user'] = payload;
        } catch (error) {
            throw new UnauthorizedException("Token no válido")
        }

        return true;
    }
}
