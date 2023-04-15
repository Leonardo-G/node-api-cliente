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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
const users_service_1 = require("../../users/services/users.service");
let AuthService = class AuthService {
    constructor(usersService, jwtService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
    }
    async comparePasswords(password, hashPassword) {
        return await bcrypt.compare(password, hashPassword);
    }
    signToken(_id) {
        const payload = {
            usuario: {
                _id: _id
            }
        };
        return this.jwtService.sign(payload);
    }
    async registerUser(user) {
        const isExist = await this.usersService.isExistUser(user.email);
        if (isExist) {
            throw new common_1.BadRequestException(`El usuario con el email ${user.email} ya existe`);
        }
        const hashPassword = await bcrypt.hash(user.password, 10);
        const newUser = await this.usersService.newUser({
            nombre: user.nombre,
            email: user.email,
            password: hashPassword
        });
        return {
            token: this.signToken(newUser._id)
        };
    }
    async loginUser(userObject) {
        const user = await this.usersService.getUser(userObject);
        if (!user)
            throw new common_1.BadRequestException("Email/Password incorrecto");
        const isPassword = await this.comparePasswords(userObject.password, user.password);
        if (!isPassword)
            throw new common_1.BadRequestException("Email/Password incorrecto");
        return {
            usuario: {
                _id: user._id,
                nombre: user.nombre,
                email: user.email
            },
            token: this.signToken(user._id)
        };
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map