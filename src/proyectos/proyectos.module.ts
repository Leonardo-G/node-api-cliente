import { Module } from '@nestjs/common';
import { ProyectosController } from './controller/proyectos.controller';
import { ProyectosService } from './services/proyectos.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Proyecto, ProyectoSchema } from './schema/proyecto.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
        {
            name: Proyecto.name,
            schema: ProyectoSchema
        }
    ])
  ],
  controllers: [ProyectosController],
  providers: [ProyectosService]
})
export class ProyectosModule {}
