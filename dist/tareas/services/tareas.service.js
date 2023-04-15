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
exports.TareasService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const tareas_schema_1 = require("../schema/tareas.schema");
let TareasService = class TareasService {
    constructor(tareaModel) {
        this.tareaModel = tareaModel;
    }
    async crearTarea(tareaObject, proyectoId) {
        const tarea = new this.tareaModel({
            nombre: tareaObject.nombre,
            proyecto: proyectoId
        });
        await tarea.save();
        return tarea;
    }
    async obtenerTareas(proyectoId) {
        const tareas = await this.tareaModel.find({
            proyecto: proyectoId
        });
        return tareas;
    }
    async actualizarTarea(tareaObject, proyectoId, tareaId) {
        const tarea = await this.tareaModel.findOneAndUpdate({ proyecto: proyectoId, _id: tareaId }, { $set: tareaObject }, { new: true }).select("-__v").exec();
        return tarea;
    }
    async eliminarTarea(tareaId) {
        await this.tareaModel.findByIdAndRemove(tareaId);
        return "Tarea Eliminado";
    }
    async tareaExists(id) {
        const tarea = await this.tareaModel.findById(id);
        return tarea;
    }
};
TareasService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(tareas_schema_1.Tarea.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], TareasService);
exports.TareasService = TareasService;
//# sourceMappingURL=tareas.service.js.map