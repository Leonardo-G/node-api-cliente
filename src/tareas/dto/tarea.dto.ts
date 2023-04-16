import { IsBoolean, IsNotEmpty, IsString, MinLength } from "class-validator";

export class TareaNuevaDTO {
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    nombre: string;
}

export class TareaActualDTO{
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    nombre: string;

    @IsBoolean()
    @IsNotEmpty()
    estado: boolean;
}