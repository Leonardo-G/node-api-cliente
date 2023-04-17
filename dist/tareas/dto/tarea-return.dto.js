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
exports.TareaReturnDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const mongoose_1 = require("mongoose");
class TareaReturnDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        type: mongoose_1.Types.ObjectId,
        format: 'objectId',
        example: '61b7e0a13f31b25b6291137a',
        description: 'ID tipo Mongo de la tarea'
    }),
    __metadata("design:type", mongoose_1.Types.ObjectId)
], TareaReturnDTO.prototype, "_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        example: 'Tarea nueva',
        description: 'Nombre de la tarea'
    }),
    __metadata("design:type", String)
], TareaReturnDTO.prototype, "nombre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Date,
        example: '2021-12-14T00:00:51.133+00:00',
        description: 'Fecha de la creación de la tarea'
    }),
    __metadata("design:type", Date)
], TareaReturnDTO.prototype, "creado", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '61b6dafbcbb50c4d8f74a629',
        description: 'Id del proyecto que contiene la tarea'
    }),
    __metadata("design:type", mongoose_1.Types.ObjectId)
], TareaReturnDTO.prototype, "proyecto", void 0);
exports.TareaReturnDTO = TareaReturnDTO;
//# sourceMappingURL=tarea-return.dto.js.map