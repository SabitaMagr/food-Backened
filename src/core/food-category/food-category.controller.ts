import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { FoodCategoryService } from './food-category.service';
import { CreateFoodCategoryDto } from './dto/create-food-category.dto';
import { UpdateFoodCategoryDto } from './dto/update-food-category.dto';
import { ApiTags } from '@nestjs/swagger';
import { Response } from 'express';

@Controller('food-category')
@ApiTags('food-category')

export class FoodCategoryController {
  constructor(private readonly foodCategoryService: FoodCategoryService) { }

  @Post()
  async create(@Body() createFoodCategoryDto: CreateFoodCategoryDto, @Res() response: Response) {
    try {
      const allFoodCategory = await this.foodCategoryService.create(createFoodCategoryDto);
      response.send({ data: allFoodCategory, message: 'Food Category Successfully Added!! ' }).status(201);
    } catch (e) {
      response.send({ data: null, message: 'Internal Server Error!' }).status(500);
    }
    // return this.foodCategoryService.create(createFoodCategoryDto);
  }


  @Get()
  async findAll(@Res() response: Response) {
    try {
      const allFoodCategory = await this.foodCategoryService.findAll();
      response.send({ data: allFoodCategory, message: 'success' }).status(201);
    } catch (e) {
      response.send({ data: null, message: 'Internal Server Error !' }).status(500);
    }
    // return this.foodCategoryService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() response: Response) {
    try {
      const allFoodCategory = await this.foodCategoryService.findOne(id);
      response.send({ data: allFoodCategory, message: 'success' }).status(201);
    } catch (e) {
      response.send({ data: null, message: 'Internal Server Error' }).status(500);
    }
    // return this.foodCategoryService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateFoodCategoryDto: UpdateFoodCategoryDto, @Res() response: Response) {
    try {
      const allFoodCategory = await this.foodCategoryService.update(id, updateFoodCategoryDto);
      return response.send({ data: allFoodCategory, message: 'Successfully Updated!' }).status(201);
    } catch (e) {
      response.send({ data: null, message: 'Internal Server Error' }).status(500);
    }
    // return this.foodCategoryService.update(+id, updateFoodCategoryDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Res() response: Response) {
    // return this.foodCategoryService.remove(+id);
    try {
      const allFoodCategory = await this.foodCategoryService.remove(id);
      response.send({ data: allFoodCategory, message: 'Food Category Successfully Deleted!' }).status(201);
    } catch (e) {
      console.log(e)
      response.status(500).send({ data: null, message: 'Internal Server Error' });
    }
  }
}
