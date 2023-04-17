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
import { 
    ApiParam, 
    ApiResponse, 
    ApiTags 
} from '@nestjs/swagger';
import { Request } from 'express';

import { ProyectoNuevoDTO } from '../dto/proyecto.dto';
import { ProyectosService } from '../services/proyectos.service';
import { AuthGuard } from 'src/common/guards/auth.guard';
import { AuthUser } from 'src/common/interface/auth-user.interface';
import { MongoIdValidationPipe } from 'src/common/pipes/mongo-id-validation.pipe';
import { ProyectosReturnDTO } from '../dto/proyecto-return.dto';

@Controller('proyectos')
@ApiTags('Proyectos')
@UseGuards( AuthGuard )
export class ProyectosController {

    constructor ( private proyectosServices: ProyectosService ) {}

    @Post()
    @ApiResponse({ 
        status: 201,
        type: ProyectosReturnDTO
    })
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
    @ApiResponse({ 
        status: 200,
        type: [ProyectosReturnDTO]
    })
    obtenerProyectosDelUsuario( @Req() { user }: Request & AuthUser ){
        return this.proyectosServices.obtenerProyectos( user.usuario._id );
    }

    @Put(":id")
    @ApiParam({
        name: 'id',
        description: 'Id del proyecto a actualizar'
    })
    @ApiResponse({ 
        status: 200,
        type: ProyectosReturnDTO
    })
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
    @ApiParam({
        name: 'id',
        description: 'Id del proyecto a eliminar'
    })
    async eliminarProyecto(
        @Param("id", MongoIdValidationPipe) id: string
    ){
        return {
            msg: await this.proyectosServices.eliminarProyecto( id )
        }
    }
    
}
