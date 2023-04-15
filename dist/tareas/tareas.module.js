"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TareasModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const tareas_controller_1 = require("./controller/tareas.controller");
const tareas_service_1 = require("./services/tareas.service");
const tareas_schema_1 = require("./schema/tareas.schema");
const proyectos_module_1 = require("../proyectos/proyectos.module");
let TareasModule = class TareasModule {
};
TareasModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: tareas_schema_1.Tarea.name,
                    schema: tareas_schema_1.TareaSchema
                }
            ]),
            proyectos_module_1.ProyectosModule
        ],
        controllers: [tareas_controller_1.TareasController],
        providers: [tareas_service_1.TareasService]
    })
], TareasModule);
exports.TareasModule = TareasModule;
//# sourceMappingURL=tareas.module.js.map