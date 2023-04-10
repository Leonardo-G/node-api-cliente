import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Proyecto, ProyectoDocument } from '../schema/proyecto.schema';
import { Model } from 'mongoose';
import { ProyectoNuevoDTO } from '../dto/proyecto.dto';

@Injectable()
export class ProyectosService {

    constructor ( @InjectModel( Proyecto.name ) private proyectoModel: Model<ProyectoDocument> ) {}

    async crearProyecto( proyectoObject: ProyectoNuevoDTO, idUser: string ): Promise<ProyectoDocument>{
        const proyecto = new this.proyectoModel({
            nombre: proyectoObject.nombre,
            creador: idUser
        })
        
        await proyecto.save()
        return proyecto;
    }

    //Obtner todos los proyecto del usuario
    async obtenerProyectos( idUser: string ): Promise<ProyectoDocument[]> {
        const proyecto = await this.proyectoModel.find({ creador: idUser });

        return proyecto
    }
}
