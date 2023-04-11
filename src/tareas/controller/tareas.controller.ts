import { Body, Controller, HttpException, Param, Post, UseGuards } from '@nestjs/common';
import { TareasService } from '../services/tareas.service';
import { ProyectoExistsGuard } from '../guard/proyecto-exist.guard';
import { AuthGuard } from 'src/common/guards/auth.guard';
import { TareaNuevaDTO } from '../dto/tarea.dto';

@Controller('proyectos/:proyectoId/tareas')
export class TareasController {
    constructor( private tareasService: TareasService ) {}

    @Post()
    @UseGuards( ProyectoExistsGuard, AuthGuard )
    async nuevaTarea( 
        @Param("proyectoId") proyectoId: string, 
        @Body() tarea: TareaNuevaDTO
    ){
        try {
            return this.tareasService.crearTarea( tarea, proyectoId );
        } catch (error) {
            throw new HttpException(error.message, error.status);
        }
    }
}
