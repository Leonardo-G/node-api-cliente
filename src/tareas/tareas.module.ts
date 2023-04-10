import { Module } from '@nestjs/common';
import { TareasController } from './controller/tareas.controller';

@Module({
  controllers: [TareasController]
})
export class TareasModule {}
