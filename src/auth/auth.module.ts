import { Module } from '@nestjs/common';
import { AuthService } from './service/auth.service';
import { AuthController } from './controller/auth.controller';
import { UsersModule } from 'src/users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/users/schemas/user.schema';

@Module({
  imports: [
    UsersModule,
    MongooseModule.forFeature([
        {
            name: User.name,
            schema: UserSchema
        }
    ])
  ],
  providers: [AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
