import { JwtService } from '@nestjs/jwt';
import { RegisterClassDTO, UserLoginDTO } from '../dto/auth.dto';
import { UsersService } from 'src/users/services/users.service';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    comparePasswords(password: string, hashPassword: string): Promise<boolean>;
    signToken(_id: string): string;
    registerUser(user: RegisterClassDTO): Promise<{
        token: string;
    }>;
    loginUser(userObject: UserLoginDTO): Promise<{
        usuario: {
            _id: any;
            nombre: string;
            email: string;
        };
        token: string;
    }>;
}
