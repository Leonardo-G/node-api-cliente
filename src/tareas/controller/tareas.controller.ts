import { Body, Controller, HttpException, Param, Post, UseGuards, Get, Put } from '@nestjs/common';
import { TareasService } from '../services/tareas.service';
import { ProyectoExistsGuard } from '../guard/proyecto-exist.guard';
import { AuthGuard } from 'src/common/guards/auth.guard';
import { TareaNuevaDTO } from '../dto/tarea.dto';

@Controller('proyectos/:proyectoId/tareas')
@UseGuards( ProyectoExistsGuard, AuthGuard )
export class TareasController {
    constructor( private tareasService: TareasService ) {}

    @Post()
    nuevaTarea( 
        @Param("proyectoId") proyectoId: string, 
        @Body() tarea: TareaNuevaDTO
    ){
        try {
            return this.tareasService.crearTarea( tarea, proyectoId );
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
    actualizarTarea( 
        @Param("proyectoId") proyectoId: string, 
        @Param("tareaId") tareaId: string, 
        @Body() tarea: TareaNuevaDTO 
    ) {
        try {
            return this.tareasService.actualizarTarea( tarea, proyectoId, tareaId );
        } catch (error) {
            throw new HttpException(error.message, error.status);
        }
    }

}
