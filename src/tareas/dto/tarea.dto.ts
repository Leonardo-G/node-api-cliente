import { IsNotEmpty, IsString, MinLength } from "class-validator";

export class TareaNuevaDTO {
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    nombre: string;
}