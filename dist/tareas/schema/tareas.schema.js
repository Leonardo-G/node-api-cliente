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
exports.TareaSchema = exports.Tarea = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const proyecto_schema_1 = require("../../proyectos/schema/proyecto.schema");
let Tarea = class Tarea extends mongoose_2.Document {
};
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        required: true,
        trim: true
    }),
    __metadata("design:type", String)
], Tarea.prototype, "nombre", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: Boolean,
        default: false
    }),
    __metadata("design:type", Boolean)
], Tarea.prototype, "estado", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: Date,
        default: Date.now()
    }),
    __metadata("design:type", Date)
], Tarea.prototype, "creado", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.Schema.Types.ObjectId,
        ref: "Proyecto"
    }),
    __metadata("design:type", proyecto_schema_1.Proyecto)
], Tarea.prototype, "proyecto", void 0);
Tarea = __decorate([
    (0, mongoose_1.Schema)()
], Tarea);
exports.Tarea = Tarea;
exports.TareaSchema = mongoose_1.SchemaFactory.createForClass(Tarea);
//# sourceMappingURL=tareas.schema.js.map