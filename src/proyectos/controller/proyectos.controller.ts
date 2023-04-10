import { 
    Body, 
    Controller, 
    Delete, 
    Get, 
    NotFoundException, 
    Param, 
    Post, 
    Put, 
    Req, 
    UseGuards 
} from '@nestjs/common';
import { Request } from 'express';

import { ProyectoNuevoDTO } from '../dto/proyecto.dto';
import { ProyectosService } from '../services/proyectos.service';
import { AuthGuard } from 'src/common/guards/auth.guard';
import { AuthUser } from 'src/common/interface/auth-user.interface';
import { MongoIdValidationPipe } from 'src/common/pipes/mongo-id-validation.pipe';

@Controller('proyectos')
@UseGuards( AuthGuard )
export class ProyectosController {

    constructor ( private proyectosServices: ProyectosService ) {}

    @Post()
    crearProyecto( 
        @Body() proyecto: ProyectoNuevoDTO, 
        @Req() { user }: Request & AuthUser
    ){
        console.log(proyecto)
        return this.proyectosServices.crearProyecto( proyecto, user.usuario._id );
    }

    //Obtenemos todos los proyectos del 
    //usuario que mandamos obtenemos del token
    @Get()
    obtenerProyectosDelUsuario( @Req() { user }: Request & AuthUser ){
        return this.proyectosServices.obtenerProyectos( user.usuario._id );
    }

    @Put(":id")
    actualizarProyecto( 
        @Param("id", MongoIdValidationPipe) id: string,
        @Body() proyectoObject: ProyectoNuevoDTO, 
        @Req() { user }: Request & AuthUser
    ){
        const proyecto = this.proyectosServices.actualizarProyecto( proyectoObject, user.usuario._id, id );
        if ( !proyecto ) throw new NotFoundException(`No se encuentra el proyecto ${ id }`) 
        
        return proyecto
    }

    @Delete(":id")
    async eliminarProyecto(
        @Param("id", MongoIdValidationPipe) id: string
    ){
        return {
            msg: await this.proyectosServices.eliminarProyecto( id )
        }
    }
    
}
