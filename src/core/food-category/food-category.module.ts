import { Module } from '@nestjs/common';
import { FoodCategoryService } from './food-category.service';
import { FoodCategoryController } from './food-category.controller';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { Food } from '../food/entities/food.entity';
import { FoodCategory, foodCategorySchema } from './entities/food-category.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: FoodCategory.name, schema: foodCategorySchema }
    ]),
  ],
  controllers: [FoodCategoryController],
  providers: [FoodCategoryService]
})
export class FoodCategoryModule { }
