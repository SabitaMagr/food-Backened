import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateFoodDto } from './dto/create-food.dto';
import { UpdateFoodDto } from './dto/update-food.dto';
import { Food } from './entities/food.entity';

@Injectable()
export class FoodService {
  constructor(@InjectModel(Food.name) private foodModel: Model<Food>) {}
  async create(CreateFoodDto: CreateFoodDto, photo: Express.Multer.File) {
    const food = await this.foodModel.create({
      name: CreateFoodDto.name,
      categoryType: CreateFoodDto.categoryType,
      price: CreateFoodDto.price,
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

  update(id: string, updateFoodDto: UpdateFoodDto) {
    return this.foodModel.updateOne({ _id: id }, updateFoodDto);
  }

  remove(id: string) {
    return this.foodModel.deleteOne({ _id: id }).exec();
  }
}
