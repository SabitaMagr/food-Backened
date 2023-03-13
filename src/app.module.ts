import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegisterModule } from './core/register/register.module';
import { FoodCategoryModule } from './core/food-category/food-category.module';
import { FoodModule } from './core/food/food.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
      exclude: ['/api*'],
    }),
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/food-backened-database'),
    RegisterModule,
    FoodCategoryModule,
    FoodModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
