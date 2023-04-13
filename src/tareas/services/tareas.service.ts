import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Tarea, TareaDocument } from '../schema/tareas.schema';
import { TareaNuevaDTO } from '../dto/tarea.dto';

@Injectable()
export class TareasService {
    constructor( @InjectModel( Tarea.name ) private tareaModel: Model<TareaDocument> ) {}

    async crearTarea( tareaObject: TareaNuevaDTO, proyectoId: string ): Promise<TareaDocument>{
        const tarea = new this.tareaModel({
            nombre: tareaObject.nombre,
            proyecto: proyectoId
        });

        await tarea.save();

        return tarea;
    }

    async obtenerTareas( proyectoId: string ): Promise<TareaDocument[]> {
        const tareas = await this.tareaModel.find({
            proyecto: proyectoId
        })

        return tareas;
    }

    async actualizarTarea( 
        tareaObject: TareaNuevaDTO, 
        proyectoId: string,
        tareaId: string    
    ): Promise<TareaDocument> {
        const tarea = await this.tareaModel.findOneAndUpdate(
            { proyecto: proyectoId, _id: tareaId },
            { $set: tareaObject },
            { new: true }
        )

        return tarea;
    }
 

}
