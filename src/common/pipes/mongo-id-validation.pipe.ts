import { ArgumentMetadata, Injectable, PipeTransform, BadRequestException } from '@nestjs/common';
import { Types } from 'mongoose';

@Injectable()
export class MongoIdValidationPipe implements PipeTransform {
  transform(value: string, metadata: ArgumentMetadata) {
    if ( !Types.ObjectId.isValid( value ) ) {
      throw new BadRequestException(`El id: ${ value }, no es un ID de mongo válido`);
    }
    return value;
  }
}
