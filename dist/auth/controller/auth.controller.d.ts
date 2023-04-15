import { RegisterClassDTO, UserLoginDTO } from '../dto/auth.dto';
import { AuthService } from '../service/auth.service';
import { Request } from 'express';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    registerUser(userObject: RegisterClassDTO): Promise<{
        token: string;
    }>;
    validateToken(request: Request): {
        usuario: any;
        token: string;
    };
    loginUser(userObject: UserLoginDTO): Promise<{
        usuario: {
            _id: any;
            nombre: string;
            email: string;
        };
        token: string;
    }>;
}
