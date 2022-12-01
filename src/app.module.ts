import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { usersService } from './users/users.service';
import keys from './config/keys';
import { User, UserSchema } from './users/user.schema';
@Module({
  imports: [
    MongooseModule.forRoot(keys.mongoURI),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [AppController, UsersController],
  providers: [AppService, usersService],
})
export class AppModule {}
