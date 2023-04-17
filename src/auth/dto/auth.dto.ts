import { ApiProperty } from "@nestjs/swagger";
import { 
    IsNotEmpty, 
    MinLength, 
    IsString, 
    IsEmail 
} from "class-validator";

export class RegisterClassDTO {
    @ApiProperty({
        required: true
    })
    @IsString()
    @IsNotEmpty()
    @MinLength( 3 )
    nombre: string;

    @ApiProperty({
        required: true
    })
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @ApiProperty({
        required: true
    })
    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    password: string;
}

export class UserLoginDTO {
    @ApiProperty({
        required: true
    })
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @ApiProperty({
        required: true
    })
    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    password: string;
}