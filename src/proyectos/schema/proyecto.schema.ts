import { Prop, SchemaFactory, Schema } from "@nestjs/mongoose";
import { Document, HydratedDocument, Schema as SchemaType } from "mongoose";

import { User } from '../../users/schemas/user.schema';

export type ProyectoDocument = HydratedDocument<Proyecto>

@Schema({ strict: true })
export class Proyecto extends Document {
    @Prop({
        type: String,
        required: true,
        trim: true
    })
    nombre: string;

    @Prop({
        type: SchemaType.Types.ObjectId,
        ref: "User",
        required: true
    })
    creador: User;

    @Prop({
        type: Date,
        default: Date.now()
    })
    creado: Date;
}

export const ProyectoSchema = SchemaFactory.createForClass( Proyecto );