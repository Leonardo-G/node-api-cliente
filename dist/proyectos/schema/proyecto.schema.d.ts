/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Document, HydratedDocument, Schema as SchemaType } from "mongoose";
import { User } from '../../users/schemas/user.schema';
export type ProyectoDocument = HydratedDocument<Proyecto>;
export declare class Proyecto extends Document {
    nombre: string;
    creador: User;
    creado: Date;
}
export declare const ProyectoSchema: SchemaType<Proyecto, import("mongoose").Model<Proyecto, any, any, any, Document<unknown, any, Proyecto> & Omit<Proyecto & {
    _id: import("mongoose").Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Proyecto, Document<unknown, {}, import("mongoose").FlatRecord<Proyecto>> & Omit<import("mongoose").FlatRecord<Proyecto> & {
    _id: import("mongoose").Types.ObjectId;
}, never>>;
