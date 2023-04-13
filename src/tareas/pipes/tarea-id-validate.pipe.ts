import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { Model } from 'mongoose';

import { Tarea, TareaDocument } from '../schema/tareas.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class TareaIdValidatePipe implements PipeTransform {
  
  constructor( @InjectModel( Tarea.name ) private tareaModel: Model<TareaDocument> ) {}

  async transform(value: string) {
    const tarea = await this.tareaModel.exists( { _id: value } )
    if ( !tarea ) {
      throw new BadRequestException(`No se encuentra la tarea con el ID: ${ value }`);
    }

    return value;
  }
}
