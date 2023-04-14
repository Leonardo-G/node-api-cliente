import { 
    Injectable, 
    CanActivate, 
    ExecutionContext, 
    NotFoundException, 
    BadRequestException 
} from '@nestjs/common';
import { Types } from 'mongoose';

import { ProyectosService } from 'src/proyectos/services/proyectos.service';

@Injectable()
export class ProyectoExistsGuard implements CanActivate {

    constructor( private proyectosService: ProyectosService ){}

    async canActivate( context: ExecutionContext ): Promise<boolean>{
        const request = context.switchToHttp().getRequest();
        const proyectoId = request.params.proyectoId;

        if ( !Types.ObjectId.isValid( proyectoId ) ){
            throw new BadRequestException(`El ID: ${ proyectoId }, no es ID de mongo válido`);
        } 

        const proyecto = await this.proyectosService.proyectoExiste( proyectoId );

        if ( !proyecto ) {
            throw new NotFoundException(`No existe el proyecto con el id ${ proyectoId }`);
        }

        return true;
    }
}