import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('API administrador')
    .setDescription('API para administrador de tareas')
    .setVersion('2.0')
    .addTag('cats')
    .build();
  
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("docs", app, document)

  app.enableCors();
  await app.listen(3000);
}
bootstrap();
