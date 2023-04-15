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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TareaExistGuard = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const tareas_service_1 = require("../services/tareas.service");
let TareaExistGuard = class TareaExistGuard {
    constructor(tareasService) {
        this.tareasService = tareasService;
    }
    async canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const tareaId = request.params.tareaId;
        if (!mongoose_1.Types.ObjectId.isValid(tareaId)) {
            throw new common_1.BadRequestException(`El ID: ${tareaId} no es un ID válido`);
        }
        const isExist = await this.tareasService.tareaExists(tareaId);
        if (!isExist) {
            throw new common_1.NotFoundException(`No se encontro una tarea con 3l ID: ${tareaId}`);
        }
        return true;
    }
};
TareaExistGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [tareas_service_1.TareasService])
], TareaExistGuard);
exports.TareaExistGuard = TareaExistGuard;
//# sourceMappingURL=tarea-exist.guard.js.map