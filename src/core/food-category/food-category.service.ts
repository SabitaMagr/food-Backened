import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateFoodCategoryDto } from './dto/create-food-category.dto';
import { UpdateFoodCategoryDto } from './dto/update-food-category.dto';
import { FoodCategory } from './entities/food-category.entity';

@Injectable()
export class FoodCategoryService {
  // create(createFoodCategoryDto: CreateFoodCategoryDto) {
  //   return 'This action adds a new foodCategory';
  // }
  constructor(
    @InjectModel(FoodCategory.name) private foodCategoryModal: Model<FoodCategory>,
  ) { }

  async create(createFoodCategoryDto: CreateFoodCategoryDto) {
    const foodCategory = await this.foodCategoryModal.create({
      categoryCode: createFoodCategoryDto.categoryCode,
      categoryName: createFoodCategoryDto.categoryName,
    });
    return foodCategory;
  }

  findAll() {
    return this.foodCategoryModal.find({}, { __v: 0 });
  }

  findOne(id: string) {
    return this.foodCategoryModal.findOne({ _id: id });
  }

  update(id: string, updateFoodCategoryDto: UpdateFoodCategoryDto) {
    return this.foodCategoryModal.updateOne({ _id: id }), updateFoodCategoryDto;
  }

  remove(id: string) {
    return this.foodCategoryModal.deleteOne({ _id: id });
  }

}
