import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Tarea, TareaDocument } from '../schema/tareas.schema';
import { Model } from 'mongoose';
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
}
