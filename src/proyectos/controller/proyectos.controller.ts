import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { ProyectoNuevoDTO } from '../dto/proyecto.dto';
import { ProyectosService } from '../services/proyectos.service';
import { AuthGuard } from 'src/common/guards/auth.guard';
import { Request } from 'express';
import { AuthUser } from 'src/common/interface/auth-user.interface';

@Controller('proyectos')
export class ProyectosController {

    constructor ( private proyectosServices: ProyectosService ) {}

    @Post()
    @UseGuards( AuthGuard )
    crearProyecto( 
        @Body() proyecto: ProyectoNuevoDTO, 
        @Req() { user }: Request & AuthUser
    ){
        console.log(proyecto)
        return this.proyectosServices.crearProyecto( proyecto, user.usuario._id );
    }

    //Obtenemos todos los proyectos del 
    //usuario que mandamos obtenemos del token
    @Get()
    @UseGuards( AuthGuard )
    obtenerProyectosDelUsuario( @Req() { user }: Request & AuthUser ){
        return this.proyectosServices.obtenerProyectos( user.usuario._id );
    }
}
