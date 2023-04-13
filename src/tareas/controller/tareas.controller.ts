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
import { TareaNuevaDTO } from '../dto/tarea.dto';
import { TareaIdValidatePipe } from '../pipes/tarea-id-validate.pipe';
import { AuthGuard } from 'src/common/guards/auth.guard';
import { MongoIdValidationPipe } from 'src/common/pipes/mongo-id-validation.pipe';

@Controller('proyectos/:proyectoId/tareas')
@UseGuards( ProyectoExistsGuard, AuthGuard )
export class TareasController {
    constructor( private tareasService: TareasService ) {}

    @Post()
    async nuevaTarea( 
        @Param("proyectoId", MongoIdValidationPipe) proyectoId: string, 
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
    actualizarTarea( 
        @Body() tarea: TareaNuevaDTO,
        @Param("proyectoId") proyectoId: string, 
        @Param("tareaId", MongoIdValidationPipe, TareaIdValidatePipe) tareaId: string, 
    ) {
        try {
            return this.tareasService.actualizarTarea( tarea, proyectoId, tareaId );
        } catch (error) {
            throw new HttpException(error.message, error.status);
        }
    }

    @Delete(':tareaId')
    async eliminarTarea(
        @Param("tareaId", MongoIdValidationPipe, TareaIdValidatePipe) tareaId: string,
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
