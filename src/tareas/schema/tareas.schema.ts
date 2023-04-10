import { Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document, HydratedDocument, Schema } from "mongoose";

import { Proyecto } from "src/proyectos/schema/proyecto.schema";

export type TareaDocument = HydratedDocument<Tarea>;

export class Tarea extends Document {
    @Prop({
        type: String,
        required: true,
        trim: true
    })
    nombre: string;

    @Prop({
        type: Boolean,
        default: false
    })
    estado: boolean;

    @Prop({
        type: Date,
        default: Date.now()
    })
    creado: Date;

    @Prop({
        type: Schema.Types.ObjectId,
        ref: "Proyecto"
    })
    proyecto: Proyecto;
}

export const TareaSchema = SchemaFactory.createForClass( Tarea );