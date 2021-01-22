import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from "./user/user.module"
import {TaskModule} from './task/task.module'

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/task-managment-demo'),TaskModule,UserModule],

})
export class AppModule {}
