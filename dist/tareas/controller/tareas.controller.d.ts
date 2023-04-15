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
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { TareasService } from '../services/tareas.service';
import { TareaNuevaDTO } from '../dto/tarea.dto';
export declare class TareasController {
    private tareasService;
    constructor(tareasService: TareasService);
    nuevaTarea(proyectoId: string, tarea: TareaNuevaDTO): Promise<import("mongoose").Document<unknown, {}, import("../schema/tareas.schema").Tarea> & Omit<import("../schema/tareas.schema").Tarea & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    obtenerTareas(proyectoId: string): Promise<(import("mongoose").Document<unknown, {}, import("../schema/tareas.schema").Tarea> & Omit<import("../schema/tareas.schema").Tarea & {
        _id: import("mongoose").Types.ObjectId;
    }, never>)[]>;
    actualizarTarea(tarea: TareaNuevaDTO, proyectoId: string, tareaId: string): Promise<import("mongoose").Document<unknown, {}, import("../schema/tareas.schema").Tarea> & Omit<import("../schema/tareas.schema").Tarea & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    eliminarTarea(tareaId: string): Promise<{
        msg: string;
    }>;
}
