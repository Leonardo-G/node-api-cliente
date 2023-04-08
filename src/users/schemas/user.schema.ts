import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document, HydratedDocument } from "mongoose";

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User extends Document{
    @Prop({
        type: String,
        required: true,
        trim: true
    })
    nombre: string;
    
    @Prop({
        type: String,
        required: true,
        trim: true,
        unique: true
    })
    email: string;
    
    @Prop({
        type: String,
        required: true,
        trim: true
    })
    password: string;
    
    @Prop({
        type: Date,
        defaut: Date.now()
    })
    registro: Date;
}

export const UserSchema = SchemaFactory.createForClass( User );