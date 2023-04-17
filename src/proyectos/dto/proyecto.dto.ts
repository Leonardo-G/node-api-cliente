import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MinLength } from "class-validator";

export class ProyectoNuevoDTO{
    @ApiProperty({
        required: true
    })
    @IsString()
    @MinLength( 3 )
    @IsNotEmpty()
    nombre: string;
}