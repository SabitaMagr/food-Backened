import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegisterModule } from './core/register/register.module';

@Module({
  imports: [ 
    
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/food-backened-database'),
    RegisterModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
