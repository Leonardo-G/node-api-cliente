import { PipeTransform } from '@nestjs/common';
import { Model } from 'mongoose';
import { TareaDocument } from '../schema/tareas.schema';
export declare class TareaIdValidatePipe implements PipeTransform {
    private tareaModel;
    constructor(tareaModel: Model<TareaDocument>);
    transform(value: string): Promise<string>;
}
