import { IsNotEmpty, MinLength, IsString, IsEmail } from "class-validator";

export class RegisterClassDTO {

    @IsString()
    @IsNotEmpty()
    @MinLength( 3 )
    nombre: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    password: string;
}

export class UserLoginDTO {
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    password: string;
}