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
exports.ProyectoSchema = exports.Proyecto = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const user_schema_1 = require("../../users/schemas/user.schema");
let Proyecto = class Proyecto extends mongoose_2.Document {
};
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        required: true,
        trim: true
    }),
    __metadata("design:type", String)
], Proyecto.prototype, "nombre", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }),
    __metadata("design:type", user_schema_1.User)
], Proyecto.prototype, "creador", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: Date,
        default: Date.now()
    }),
    __metadata("design:type", Date)
], Proyecto.prototype, "creado", void 0);
Proyecto = __decorate([
    (0, mongoose_1.Schema)({ strict: true })
], Proyecto);
exports.Proyecto = Proyecto;
exports.ProyectoSchema = mongoose_1.SchemaFactory.createForClass(Proyecto);
//# sourceMappingURL=proyecto.schema.js.map