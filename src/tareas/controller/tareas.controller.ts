import { 
    Body, 
    Controller, 
    HttpException, 
    Param, 
    Post, 
    UseGuards, 
    Get, 
    Put, 
    Delete
} from '@nestjs/common';

import { TareasService } from '../services/tareas.service';
import { ProyectoExistsGuard } from '../guard/proyecto-exist.guard';
import { TareaExistGuard } from '../guard/tarea-exist.guard';

import { TareaActualDTO, TareaNuevaDTO } from '../dto/tarea.dto';
import { AuthGuard } from 'src/common/guards/auth.guard';
import { ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { TareaReturnDTO } from '../dto/tarea-return.dto';

@ApiTags('Tareas')
@Controller('proyectos/:proyectoId/tareas')
@UseGuards( ProyectoExistsGuard, AuthGuard )
export class TareasController {
    constructor( private tareasService: TareasService ) {}

    @Post()
    @ApiParam({
        name: 'proyectoId',
        description: "Id del proyecto que contiene las tareas"
    })
    @ApiResponse({ 
        status: 201,
        type: TareaReturnDTO
    })
    async nuevaTarea( 
        @Body() tarea: TareaNuevaDTO,
        @Param("proyectoId") proyectoId: string
    ){
        try {
            return await this.tareasService.crearTarea( tarea, proyectoId );
        } catch (error) {
            throw new HttpException(error.message, error.status);
        }
    }

    @Get()
    @ApiParam({
        name: 'proyectoId',
        description: "Id del proyecto que contiene las tareas"
    })    
    @ApiResponse({ 
        status: 200,
        type: [TareaReturnDTO]
    })
    obtenerTareas( @Param("proyectoId") proyectoId: string ) {
        try {
            return this.tareasService.obtenerTareas( proyectoId );
        } catch (error) {
            throw new HttpException(error.message, error.status);
        }
    }

    @Put(':tareaId')
    @ApiResponse({ 
        status: 200,
        type: TareaReturnDTO
    })
    @ApiParam({
        name: 'proyectoId',
        description: "Id del proyecto que contiene las tareas"
    })
    @ApiParam({
        name: 'tareaId',
        description: "Id de la tarea a actualizar"
    })
    @UseGuards( TareaExistGuard )
    actualizarTarea( 
        @Body() tarea: TareaActualDTO,
        @Param("proyectoId") proyectoId: string, 
        @Param("tareaId") tareaId: string, 
    ) {
        try {
            return this.tareasService.actualizarTarea( tarea, proyectoId, tareaId );
        } catch (error) {
            throw new HttpException(error.message, error.status);
        }
    }

    @Delete(':tareaId')
    @ApiParam({
        name: 'proyectoId',
        description: "Id del proyecto que contiene las tareas"
    })
    @ApiParam({
        name: 'proyectoId',
        description: "Id de la tarea a eliminar"
    })
    @UseGuards( TareaExistGuard )
    async eliminarTarea(
        @Param("tareaId") tareaId: string,
    ) {
        try {
            const msg = await this.tareasService.eliminarTarea( tareaId );

            return {
               msg
            }
        } catch (error) {
            throw new HttpException(error.message, error.status);
        }
    }

}
