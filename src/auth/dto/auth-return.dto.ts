import { ApiProperty } from "@nestjs/swagger";
import { Types } from "mongoose";

class User {
    @ApiProperty({
        type: 'objectId',
        example: '61b048ed7d973b6a5f515b36',
        description: "ID del usuario"
    })
    _id: Types.ObjectId;

    @ApiProperty({
        type: String,
        example: "User123",
        description: "Nombre del usuario"
    })
    nombre: string;

    @ApiProperty({
        type: String,
        example: "correo@correo.com",
        description: "Email del usuario"
    })
    email: string;
}

export class TokenDTO{
    @ApiProperty({
        type: String,
        example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjp7Il9pZCI6IjYxYjNiOGQ4ZTBiZjMzMmVkNTM3MDMwYSJ9LCJpYXQiOjE2ODE1MTEwNTcsImV4cCI6MTY4MTU5NzQ1N30.dP_vgnheVRVkbJYWtT1jhWHO7BRbfFjtAjMbCeHj7d0",
        description: "Token de autenticación"
    })
    token: string
}

export class AuthReturnDTO{
    @ApiProperty()
    usuario: User;

    @ApiProperty()
    token: TokenDTO;
}
