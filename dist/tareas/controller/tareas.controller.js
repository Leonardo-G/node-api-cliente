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
exports.TareasController = void 0;
const common_1 = require("@nestjs/common");
const tareas_service_1 = require("../services/tareas.service");
const proyecto_exist_guard_1 = require("../guard/proyecto-exist.guard");
const tarea_exist_guard_1 = require("../guard/tarea-exist.guard");
const tarea_dto_1 = require("../dto/tarea.dto");
const auth_guard_1 = require("../../common/guards/auth.guard");
let TareasController = class TareasController {
    constructor(tareasService) {
        this.tareasService = tareasService;
    }
    async nuevaTarea(proyectoId, tarea) {
        try {
            return await this.tareasService.crearTarea(tarea, proyectoId);
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status);
        }
    }
    obtenerTareas(proyectoId) {
        try {
            return this.tareasService.obtenerTareas(proyectoId);
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status);
        }
    }
    actualizarTarea(tarea, proyectoId, tareaId) {
        try {
            return this.tareasService.actualizarTarea(tarea, proyectoId, tareaId);
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status);
        }
    }
    async eliminarTarea(tareaId) {
        try {
            const msg = await this.tareasService.eliminarTarea(tareaId);
            return {
                msg
            };
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status);
        }
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Param)("proyectoId")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, tarea_dto_1.TareaNuevaDTO]),
    __metadata("design:returntype", Promise)
], TareasController.prototype, "nuevaTarea", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Param)("proyectoId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TareasController.prototype, "obtenerTareas", null);
__decorate([
    (0, common_1.Put)(':tareaId'),
    (0, common_1.UseGuards)(tarea_exist_guard_1.TareaExistGuard),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)("proyectoId")),
    __param(2, (0, common_1.Param)("tareaId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [tarea_dto_1.TareaActualDTO, String, String]),
    __metadata("design:returntype", void 0)
], TareasController.prototype, "actualizarTarea", null);
__decorate([
    (0, common_1.Delete)(':tareaId'),
    (0, common_1.UseGuards)(tarea_exist_guard_1.TareaExistGuard),
    __param(0, (0, common_1.Param)("tareaId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TareasController.prototype, "eliminarTarea", null);
TareasController = __decorate([
    (0, common_1.Controller)('proyectos/:proyectoId/tareas'),
    (0, common_1.UseGuards)(proyecto_exist_guard_1.ProyectoExistsGuard, auth_guard_1.AuthGuard),
    __metadata("design:paramtypes", [tareas_service_1.TareasService])
], TareasController);
exports.TareasController = TareasController;
//# sourceMappingURL=tareas.controller.js.map