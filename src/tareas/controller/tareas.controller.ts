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

import { TareaNuevaDTO } from '../dto/tarea.dto';
import { AuthGuard } from 'src/common/guards/auth.guard';

@Controller('proyectos/:proyectoId/tareas')
@UseGuards( ProyectoExistsGuard, AuthGuard )
export class TareasController {
    constructor( private tareasService: TareasService ) {}

    @Post()
    async nuevaTarea( 
        @Param("proyectoId") proyectoId: string, 
        @Body() tarea: TareaNuevaDTO
    ){
        try {
            return await this.tareasService.crearTarea( tarea, proyectoId );
        } catch (error) {
            throw new HttpException(error.message, error.status);
        }
    }

    @Get()
    obtenerTareas( @Param("proyectoId") proyectoId: string ) {
        try {
            return this.tareasService.obtenerTareas( proyectoId );
        } catch (error) {
            throw new HttpException(error.message, error.status);
        }
    }

    @Put(':tareaId')
    @UseGuards( TareaExistGuard )
    actualizarTarea( 
        @Body() tarea: TareaNuevaDTO,
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
