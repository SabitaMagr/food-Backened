import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { FoodService } from './food.service';
import { CreateFoodDto } from './dto/create-food.dto';
import { UpdateFoodDto } from './dto/update-food.dto';
import { ApiTags } from '@nestjs/swagger';
import { Response } from 'express';


@Controller('food')
@ApiTags('food')


export class FoodController {
  constructor(private readonly foodService: FoodService) { }

  @Post()
  async create(@Body() createFoodDto: CreateFoodDto, @Res() response: Response) {
    // return this.foodService.create(createFoodDto);
    try {
      const allFood = await this.foodService.create(createFoodDto);
      response.send({ data: allFood, message: 'Food  Successfully Added!! ' }).status(201);
    } catch (e) {
      response.send({ data: null, message: 'Internal Server Error!' }).status(500);
    }
  }


  @Get()
  async findAll(@Res() response: Response) {
    try {
      const allFood = await this.foodService.findAll();
      response.send({ data: allFood, message: 'success' }).status(201);
    } catch (e) {
      response.send({ data: null, message: 'Internal Server Error !' }).status(500);
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() response: Response) {
    try {
      const allFood = await this.foodService.findOne(id);
      response.send({ data: allFood, message: 'success' }).status(201);
    } catch (e) {
      response.send({ data: null, message: 'Internal Server Error' }).status(500);
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateFoodDto: UpdateFoodDto, @Res() response: Response) {
    try {
      const allFood = await this.foodService.update(id, updateFoodDto);
      return response.send({ data: allFood, message: 'Successfully Updated!' }).status(201);
    } catch (e) {
      response.send({ data: null, message: 'Internal Server Error' }).status(500);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Res() response: Response) {
    try {
      const allFoodCategory = await this.foodService.remove(id);
      response.send({ data: allFoodCategory, message: 'Food  Successfully Deleted!' }).status(201);
    } catch (e) {
      console.log(e)
      response.status(500).send({ data: null, message: 'Internal Server Error' });
    }
  }
}
