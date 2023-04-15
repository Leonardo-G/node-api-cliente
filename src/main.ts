import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
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
    .addTag('cats')
    .build();
  
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("docs", app, document)

  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true,
  });
  
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
