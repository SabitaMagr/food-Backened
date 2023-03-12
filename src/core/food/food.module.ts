import { Module } from '@nestjs/common';
import { FoodService } from './food.service';
import { FoodController } from './food.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Food, foodSchema } from './entities/food.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Food.name, schema: foodSchema }
    ]),
  ],
  controllers: [FoodController],
  providers: [FoodService]
})
export class FoodModule { }

