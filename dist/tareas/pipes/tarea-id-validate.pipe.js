"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TareaIdValidatePipe = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const tareas_schema_1 = require("../schema/tareas.schema");
const mongoose_2 = require("@nestjs/mongoose");
let TareaIdValidatePipe = class TareaIdValidatePipe {
    constructor(tareaModel) {
        this.tareaModel = tareaModel;
    }
    async transform(value) {
        const tarea = await this.tareaModel.exists({ _id: value });
        if (!tarea) {
            throw new common_1.BadRequestException(`No se encuentra la tarea con el ID: ${value}`);
        }
        return value;
    }
};
TareaIdValidatePipe = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(tareas_schema_1.Tarea.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], TareaIdValidatePipe);
exports.TareaIdValidatePipe = TareaIdValidatePipe;
//# sourceMappingURL=tarea-id-validate.pipe.js.map