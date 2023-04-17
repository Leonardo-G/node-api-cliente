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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_dto_1 = require("../dto/auth.dto");
const auth_service_1 = require("../service/auth.service");
const auth_guard_1 = require("../../common/guards/auth.guard");
const valid_user_guard_1 = require("../../common/guards/valid-user.guard");
const swagger_1 = require("@nestjs/swagger");
const auth_return_dto_1 = require("../dto/auth-return.dto");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    registerUser(userObject) {
        return this.authService.registerUser(userObject);
    }
    validateToken(request) {
        const user = request['user'];
        return {
            usuario: user,
            token: this.authService.signToken(user._id)
        };
    }
    loginUser(userObject) {
        return this.authService.loginUser(userObject);
    }
};
__decorate([
    (0, common_1.Post)('register'),
    (0, swagger_1.ApiResponse)({
        status: 201,
        type: auth_return_dto_1.TokenDTO
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.RegisterClassDTO]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "registerUser", null);
__decorate([
    (0, common_1.Post)('validate'),
    (0, swagger_1.ApiResponse)({
        status: 201,
        type: auth_return_dto_1.AuthReturnDTO
    }),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, valid_user_guard_1.ValidUser),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "validateToken", null);
__decorate([
    (0, common_1.Post)('login'),
    (0, swagger_1.ApiResponse)({
        status: 201,
        type: auth_return_dto_1.AuthReturnDTO
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.UserLoginDTO]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "loginUser", null);
AuthController = __decorate([
    (0, swagger_1.ApiTags)('Auth'),
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map