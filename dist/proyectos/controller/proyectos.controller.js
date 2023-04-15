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
exports.ProyectosController = void 0;
const common_1 = require("@nestjs/common");
const proyecto_dto_1 = require("../dto/proyecto.dto");
const proyectos_service_1 = require("../services/proyectos.service");
const auth_guard_1 = require("../../common/guards/auth.guard");
const mongo_id_validation_pipe_1 = require("../../common/pipes/mongo-id-validation.pipe");
let ProyectosController = class ProyectosController {
    constructor(proyectosServices) {
        this.proyectosServices = proyectosServices;
    }
    crearProyecto(proyecto, { user }) {
        console.log(proyecto);
        return this.proyectosServices.crearProyecto(proyecto, user.usuario._id);
    }
    obtenerProyectosDelUsuario({ user }) {
        return this.proyectosServices.obtenerProyectos(user.usuario._id);
    }
    actualizarProyecto(id, proyectoObject, { user }) {
        const proyecto = this.proyectosServices.actualizarProyecto(proyectoObject, user.usuario._id, id);
        if (!proyecto)
            throw new common_1.NotFoundException(`No se encuentra el proyecto ${id}`);
        return proyecto;
    }
    async eliminarProyecto(id) {
        return {
            msg: await this.proyectosServices.eliminarProyecto(id)
        };
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [proyecto_dto_1.ProyectoNuevoDTO, Object]),
    __metadata("design:returntype", void 0)
], ProyectosController.prototype, "crearProyecto", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ProyectosController.prototype, "obtenerProyectosDelUsuario", null);
__decorate([
    (0, common_1.Put)(":id"),
    __param(0, (0, common_1.Param)("id", mongo_id_validation_pipe_1.MongoIdValidationPipe)),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, proyecto_dto_1.ProyectoNuevoDTO, Object]),
    __metadata("design:returntype", void 0)
], ProyectosController.prototype, "actualizarProyecto", null);
__decorate([
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id", mongo_id_validation_pipe_1.MongoIdValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProyectosController.prototype, "eliminarProyecto", null);
ProyectosController = __decorate([
    (0, common_1.Controller)('proyectos'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __metadata("design:paramtypes", [proyectos_service_1.ProyectosService])
], ProyectosController);
exports.ProyectosController = ProyectosController;
//# sourceMappingURL=proyectos.controller.js.map