import { CanActivate, ExecutionContext } from '@nestjs/common';
import { TareasService } from '../services/tareas.service';
export declare class TareaExistGuard implements CanActivate {
    private tareasService;
    constructor(tareasService: TareasService);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
