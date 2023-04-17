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
exports.ProyectosReturnDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const mongoose_1 = require("mongoose");
class ProyectosReturnDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        example: "61b048ed7d973b6a5f515b36",
        description: "ID del proyecto"
    }),
    __metadata("design:type", mongoose_1.Types.ObjectId)
], ProyectosReturnDTO.prototype, "_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        example: "Proyecto Nuevo",
        description: "Nombre del proyecto"
    }),
    __metadata("design:type", String)
], ProyectosReturnDTO.prototype, "nombre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'objectId',
        example: "61b8364658300d6dc34c2bbd",
        description: "ID del usuario"
    }),
    __metadata("design:type", mongoose_1.Types.ObjectId)
], ProyectosReturnDTO.prototype, "creador", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "2021-12-14T05:57:57.321+00:00",
        description: "fecha de la creación de proyecto"
    }),
    __metadata("design:type", Date)
], ProyectosReturnDTO.prototype, "creado", void 0);
exports.ProyectosReturnDTO = ProyectosReturnDTO;
//# sourceMappingURL=proyecto-return.dto.js.map