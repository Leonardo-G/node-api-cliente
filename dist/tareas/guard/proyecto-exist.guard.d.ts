import { CanActivate, ExecutionContext } from '@nestjs/common';
import { ProyectosService } from 'src/proyectos/services/proyectos.service';
export declare class ProyectoExistsGuard implements CanActivate {
    private proyectosService;
    constructor(proyectosService: ProyectosService);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
