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
exports.AuthReturnDTO = exports.TokenDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const mongoose_1 = require("mongoose");
class User {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'objectId',
        example: '61b048ed7d973b6a5f515b36',
        description: "ID del usuario"
    }),
    __metadata("design:type", mongoose_1.Types.ObjectId)
], User.prototype, "_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        example: "User123",
        description: "Nombre del usuario"
    }),
    __metadata("design:type", String)
], User.prototype, "nombre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        example: "correo@correo.com",
        description: "Email del usuario"
    }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
class TokenDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjp7Il9pZCI6IjYxYjNiOGQ4ZTBiZjMzMmVkNTM3MDMwYSJ9LCJpYXQiOjE2ODE1MTEwNTcsImV4cCI6MTY4MTU5NzQ1N30.dP_vgnheVRVkbJYWtT1jhWHO7BRbfFjtAjMbCeHj7d0",
        description: "Token de autenticación"
    }),
    __metadata("design:type", String)
], TokenDTO.prototype, "token", void 0);
exports.TokenDTO = TokenDTO;
class AuthReturnDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", User)
], AuthReturnDTO.prototype, "usuario", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", TokenDTO)
], AuthReturnDTO.prototype, "token", void 0);
exports.AuthReturnDTO = AuthReturnDTO;
//# sourceMappingURL=auth-return.dto.js.map