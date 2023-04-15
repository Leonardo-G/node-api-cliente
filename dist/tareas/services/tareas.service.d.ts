import { Model } from 'mongoose';
import { TareaDocument } from '../schema/tareas.schema';
import { TareaNuevaDTO } from '../dto/tarea.dto';
export declare class TareasService {
    private tareaModel;
    constructor(tareaModel: Model<TareaDocument>);
    crearTarea(tareaObject: TareaNuevaDTO, proyectoId: string): Promise<TareaDocument>;
    obtenerTareas(proyectoId: string): Promise<TareaDocument[]>;
    actualizarTarea(tareaObject: TareaNuevaDTO, proyectoId: string, tareaId: string): Promise<TareaDocument>;
    eliminarTarea(tareaId: string): Promise<string>;
    tareaExists(id: string): Promise<TareaDocument | null>;
}
