import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
export declare class MongoIdValidationPipe implements PipeTransform {
    transform(value: string, metadata: ArgumentMetadata): string;
}
