import { ApiProperty } from "@nestjs/swagger";
import { Types } from "mongoose";

export class ProyectosReturnDTO {
    @ApiProperty({
        type: String,
        example: "61b048ed7d973b6a5f515b36",
        description: "ID del proyecto"
    })
    _id: Types.ObjectId;
    
    @ApiProperty({
        type: String,
        example: "Proyecto Nuevo",
        description: "Nombre del proyecto"
    })
    nombre: string;

    @ApiProperty({
        type: 'objectId',
        example: "61b8364658300d6dc34c2bbd",
        description: "ID del usuario"
    })
    creador: Types.ObjectId;

    @ApiProperty({
        example: "2021-12-14T05:57:57.321+00:00",
        description: "fecha de la creación de proyecto"
    })
    creado: Date;
}