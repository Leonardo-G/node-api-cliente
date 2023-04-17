import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  });
  app.useGlobalPipes( new ValidationPipe({
    whitelist: true,
    transform: true,
    transformOptions: {
      enableImplicitConversion: true
    }
  }) )
  const config = new DocumentBuilder()
    .setTitle('API administrador')
    .setDescription('API para administrador de tareas')
    .setVersion('2.0')
    .build();
  
  const document = SwaggerModule.createDocument(app, config);
  const swaggerCustomOptions = { customCss: '.swagger-ui section.models { display: none;}' };
  SwaggerModule.setup("docs", app, document, swaggerCustomOptions);

  app.enableCors();

  await app.listen(process.env.PORT || 8000);
}
bootstrap();
