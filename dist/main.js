"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
    });
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        transform: true,
        transformOptions: {
            enableImplicitConversion: true
        }
    }));
    const config = new swagger_1.DocumentBuilder()
        .setTitle('API administrador')
        .setDescription('API para administrador de tareas')
        .setVersion('2.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    const swaggerCustomOptions = { customCss: '.swagger-ui section.models { display: none;}' };
    swagger_1.SwaggerModule.setup("docs", app, document, swaggerCustomOptions);
    app.enableCors();
    await app.listen(process.env.PORT || 8000);
}
bootstrap();
//# sourceMappingURL=main.js.map