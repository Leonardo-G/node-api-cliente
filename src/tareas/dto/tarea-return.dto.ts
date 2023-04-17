import { ApiProperty } from "@nestjs/swagger";
import { Types } from "mongoose";

export class TareaReturnDTO {
    @ApiProperty({
        type: Types.ObjectId, 
        format: 'objectId', 
        example: '61b7e0a13f31b25b6291137a',
        description: 'ID tipo Mongo de la tarea'
    })
    _id: Types.ObjectId;

    @ApiProperty({ 
        type: String,
        example: 'Tarea nueva',
        description: 'Nombre de la tarea'
    })
    nombre: string;

    @ApiProperty({ 
        type: Date,
        example: '2021-12-14T00:00:51.133+00:00',
        description: 'Fecha de la creación de la tarea'
    })
    creado: Date;

    @ApiProperty({ 
        example: '61b6dafbcbb50c4d8f74a629',
        description: 'Id del proyecto que contiene la tarea'
    })
    proyecto: Types.ObjectId;

}