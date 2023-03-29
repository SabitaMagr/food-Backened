import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { response, Response } from 'express';
import { DeliveryService } from './delivery.service';
import { CreateDeliveryDto } from './dto/create-delivery.dto';
import { UpdateDeliveryDto } from './dto/update-delivery.dto';

@Controller('delivery')
@ApiTags('delivery')
export class DeliveryController {
  constructor(private readonly deliveryService: DeliveryService) { }


  @Post()
  async create(@Body() createDeliveryDto: CreateDeliveryDto, @Res() response: Response) {
    // return this.deliveryService.create(createDeliveryDto);
    try {
      const allDelivery = await this.deliveryService.create(createDeliveryDto);
      response.send({ data: allDelivery, message: 'Success!!' }).status(201);
    } catch (e) {
      response.send({ data: null, message: 'Internal Server Error' }).status(500);
    }
  }

  @Get()
  async findAll(@Res() response: Response) {
    // return this.deliveryService.findAll();
    try {
      const allDelivery = await this.deliveryService.findAll();
      response.send({ dtat: allDelivery, message: 'Success!!' }).status(201);
    } catch (e) {
      response.send({ data: null, message: 'Internal Server Error' }).status(500);
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() response: Response) {
    // return this.deliveryService.findOne(+id);
    try {
      const allDelivery = await this.deliveryService.findOne(id);
      response.send({ dtat: allDelivery, message: 'Success!!' }).status(201);
    } catch (e) {
      response.send({ data: null, message: 'Internal Server Error' }).status(500);
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateDeliveryDto: UpdateDeliveryDto) {
    // return this.deliveryService.update(+id, updateDeliveryDto);
    try {
      const allDelivery = await this.deliveryService.update(id, updateDeliveryDto);
      response.send({ dtat: allDelivery, message: 'Customer Review Updated Successfully!!' }).status(201);
    } catch (e) {
      response.send({ data: null, message: 'Internal Server Error' }).status(500);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    // return this.deliveryService.remove(+id);
    try {
      const allDelivery = await this.deliveryService.remove(id);
      response.send({ dtat: allDelivery, message: 'Customer Review Deleted Successfully!!' }).status(201);
    } catch (e) {
      response.send({ data: null, message: 'Internal Server Error' }).status(500);
    }
    // return this.deliveryService.remove(+id);
  }
}
