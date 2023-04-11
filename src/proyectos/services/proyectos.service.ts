import { Injectable, NotFoundException } from '@nestjs/common';
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
        
        await proyecto.save();
        return proyecto;
    }

    //Obtner todos los proyecto del usuario
    async obtenerProyectos( idUser: string ): Promise<ProyectoDocument[]> {
        const proyecto = await this.proyectoModel.find({ creador: idUser });

        return proyecto
    }

    async actualizarProyecto( proyectoObject: ProyectoNuevoDTO, idUser: string, idProyecto ): Promise<ProyectoDocument> {
        const proyecto = await this.proyectoModel.findOneAndUpdate(
            { creador: idUser, _id: idProyecto },        //Filtro de busqueda
            { $set: proyectoObject },   //Actualizar el proyecto en la DB
            { new: true }               //Devolver el objeto actualizado
        ).select("-__v")

        return proyecto
    }

    async eliminarProyecto( idProyecto: string ): Promise<string>{
        const exist = await this.proyectoExiste( idProyecto );
        if ( !exist ) throw new NotFoundException(`No se encontro el proyecto con el id: ${ idProyecto }`);

        await this.proyectoModel.findOneAndRemove({ 
            _id: idProyecto
        }).exec();

        return "Proyecto eliminado";
    }
    
    async proyectoExiste( id: string ){
        const proyecto = await this.proyectoModel.exists({ _id: id }).exec();
        return proyecto
    }
}
