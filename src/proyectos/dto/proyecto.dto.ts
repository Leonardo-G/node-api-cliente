import { IsNotEmpty, IsString, MinLength } from "class-validator";

export class ProyectoNuevoDTO{
    @IsString()
    @MinLength( 3 )
    @IsNotEmpty()
    nombre: string;
}