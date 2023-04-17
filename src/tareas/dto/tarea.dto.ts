import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsString, MinLength } from "class-validator";

export class TareaNuevaDTO {
    @ApiProperty({
        required: true
    })
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    nombre: string;
}

export class TareaActualDTO{
    @ApiProperty({
        required: true
    })
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    nombre: string;

    @ApiProperty({
        required: true
    })
    @IsBoolean()
    @IsNotEmpty()
    estado: boolean;
}