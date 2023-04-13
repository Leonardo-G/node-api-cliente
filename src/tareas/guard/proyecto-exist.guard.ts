import { Injectable, CanActivate, ExecutionContext, NotFoundException } from '@nestjs/common';
import { ProyectosService } from 'src/proyectos/services/proyectos.service';

@Injectable()
export class ProyectoExistsGuard implements CanActivate {

    constructor( private proyectosService: ProyectosService ){}

    async canActivate( context: ExecutionContext ): Promise<boolean>{
        const request = context.switchToHttp().getRequest();
        const proyectoId = request.params.proyectoId;
        const proyecto = await this.proyectosService.proyectoExiste( proyectoId );
        console.log(proyecto)

        if ( !proyecto ) {
            throw new NotFoundException(`No existe el proyecto con el id ${ proyectoId }`);
        }

        return true;
    }
}