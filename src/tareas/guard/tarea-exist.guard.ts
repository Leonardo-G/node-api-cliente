import { 
    CanActivate, 
    ExecutionContext, 
    Injectable, 
    BadRequestException, 
    NotFoundException 
} from '@nestjs/common';
import { Types } from "mongoose";
import { TareasService } from '../services/tareas.service';

@Injectable()
export class TareaExistGuard implements CanActivate {

    constructor ( private tareasService: TareasService ) {}

    async canActivate( context: ExecutionContext ){

        const request = context.switchToHttp().getRequest();
        const tareaId = request.params.tareaId;
        
        if ( !Types.ObjectId.isValid( tareaId ) ){
            throw new BadRequestException( `El ID: ${ tareaId } no es un ID válido` );
        }

        const isExist = await this.tareasService.tareaExists( tareaId );

        if ( !isExist ) {
            throw new NotFoundException(`No se encontro una tarea con 3l ID: ${ tareaId }`);
        }
    
        return true;
    }
}