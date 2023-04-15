import { ProyectoDocument } from '../schema/proyecto.schema';
import { Model } from 'mongoose';
import { ProyectoNuevoDTO } from '../dto/proyecto.dto';
export declare class ProyectosService {
    private proyectoModel;
    constructor(proyectoModel: Model<ProyectoDocument>);
    crearProyecto(proyectoObject: ProyectoNuevoDTO, idUser: string): Promise<ProyectoDocument>;
    obtenerProyectos(idUser: string): Promise<ProyectoDocument[]>;
    actualizarProyecto(proyectoObject: ProyectoNuevoDTO, idUser: string, idProyecto: string): Promise<ProyectoDocument>;
    eliminarProyecto(idProyecto: string): Promise<string>;
    proyectoExiste(id: string): Promise<{
        _id: any;
    }>;
}
