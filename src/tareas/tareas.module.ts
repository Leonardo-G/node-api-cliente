import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { TareasController } from './controller/tareas.controller';
import { TareasService } from './services/tareas.service';
import { Tarea, TareaSchema } from './schema/tareas.schema';
import { ProyectosModule } from 'src/proyectos/proyectos.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Tarea.name,
        schema: TareaSchema
      }
    ]),
    ProyectosModule
  ],
  controllers: [TareasController],
  providers: [TareasService]
})
export class TareasModule {}
