import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegisterModule } from './core/register/register.module';
import { FoodCategoryModule } from './core/food-category/food-category.module';
import { FoodModule } from './core/food/food.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { CustomerReviewModule } from './core/customer-review/customer-review.module';
import { AuthModule } from './core/auth/auth.module';
import { DeliveryModule } from './core/delivery/delivery.module';
import { OrderModule } from './core/order/order.module';
@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),   //store images in pulic/food
      exclude: ['/api*'],
    }),
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/food-backened-database'),  //db connection
    RegisterModule,
    FoodCategoryModule,
    FoodModule,
    CustomerReviewModule,
    AuthModule,
    DeliveryModule,
    OrderModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
