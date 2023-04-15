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
exports.ProyectosService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const proyecto_schema_1 = require("../schema/proyecto.schema");
const mongoose_2 = require("mongoose");
let ProyectosService = class ProyectosService {
    constructor(proyectoModel) {
        this.proyectoModel = proyectoModel;
    }
    async crearProyecto(proyectoObject, idUser) {
        const proyecto = new this.proyectoModel({
            nombre: proyectoObject.nombre,
            creador: idUser
        });
        await proyecto.save();
        return proyecto;
    }
    async obtenerProyectos(idUser) {
        const proyecto = await this.proyectoModel.find({ creador: idUser });
        return proyecto;
    }
    async actualizarProyecto(proyectoObject, idUser, idProyecto) {
        const proyecto = await this.proyectoModel.findOneAndUpdate({ creador: idUser, _id: idProyecto }, { $set: proyectoObject }, { new: true }).select("-__v");
        return proyecto;
    }
    async eliminarProyecto(idProyecto) {
        const exist = await this.proyectoExiste(idProyecto);
        if (!exist)
            throw new common_1.NotFoundException(`No se encontro el proyecto con el id: ${idProyecto}`);
        await this.proyectoModel.findOneAndRemove({
            _id: idProyecto
        }).exec();
        return "Proyecto eliminado";
    }
    async proyectoExiste(id) {
        try {
            const proyecto = await this.proyectoModel.exists({ _id: id });
            return proyecto;
        }
        catch (error) {
            console.log(error);
            throw new common_1.BadRequestException(`No se encuentra el proyecto con el ID: ${id}`);
        }
    }
};
ProyectosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(proyecto_schema_1.Proyecto.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ProyectosService);
exports.ProyectosService = ProyectosService;
//# sourceMappingURL=proyectos.service.js.map