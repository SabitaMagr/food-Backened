import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateFoodDto } from './dto/create-food.dto';
import { UpdateFoodDto } from './dto/update-food.dto';
import { Food } from './entities/food.entity';
import * as fs from 'fs'
@Injectable()
export class FoodService {
  constructor(@InjectModel(Food.name) private foodModel: Model<Food>) { }
  async create(CreateFoodDto: CreateFoodDto, photo: Express.Multer.File) {
    const food = await this.foodModel.create({
      name: CreateFoodDto.name,
      categoryType: CreateFoodDto.categoryType,
      price: CreateFoodDto.price,
      description: CreateFoodDto.price,
      photo: photo.filename,
      status: CreateFoodDto.status,
    });
    return food;
  }

  findAll() {
    return this.foodModel.find({}, { __v: 0 }).populate('categoryType');
  }

  findOne(id: string) {
    return this.foodModel.findOne({ _id: id });
  }

  async update(id: string, updateFoodDto: UpdateFoodDto, photo: any) {
    const food = await this.foodModel.findOne({ _id: id });
    food.name = updateFoodDto?.name,
      food.categoryType = updateFoodDto?.categoryType,
      food.price = updateFoodDto?.price,
      food.status = updateFoodDto?.status,
      food.description = updateFoodDto?.description
    if (photo) {
      food.photo = photo?.filename;
    }
    await food.save().then(
      () => {
        if (photo) {
          if (food?.photo) {
            const path = './public/food/' + food?.photo;
            if (fs.existsSync(path)) {
              // fs.unlinkSync(path);
              console.log(path)

            }
          }
        }
      }
    )

    return food
  }

  remove(id: string) {
    return this.foodModel.deleteOne({ _id: id }).exec();
  }
}
