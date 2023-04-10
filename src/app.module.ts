import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { authConstants } from './auth/constants';
import { ProyectosModule } from './proyectos/proyectos.module';

@Module({
  imports: [
    DatabaseModule, 
    UsersModule, 
    AuthModule,
    JwtModule.register({
      global: true,
      secret: authConstants.secret,
      signOptions: { expiresIn: "24h" }
    }),
    ProyectosModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
