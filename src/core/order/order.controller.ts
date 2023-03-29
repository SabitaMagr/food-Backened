import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { OrderService } from './order.service';
import { response, Response } from 'express';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) { }

  @Post()
  async create(@Body() createOrderDto: CreateOrderDto, @Res() response: Response) {
    // return this.orderService.create(createOrderDto);
    try {
      const allOrder = await this.orderService.create(createOrderDto);
      response.send({ data: allOrder, message: 'Success!' }).status(201);
    } catch {
      response.send({ data: null, message: 'Internal Server Error' }).status(500);
    }
  }


  @Get()
  async findAll(@Res() response: Response) {
    // return this.orderService.findAll();
    try {
      const allOrder = await this.orderService.findAll();
      response.send({ data: allOrder, message: 'Success!' }).status(201);
    } catch {
      response.send({ data: null, message: 'Internal Server Error' }).status(500);
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() response: Response) {
    // return this.orderService.findOne(+id);
    try {
      const allOrder = await this.orderService.findOne(id);
      response.send({ data: allOrder, message: 'Success!' }).status(201);
    } catch {
      response.send({ data: null, message: 'Internal Server Error' }).status(500);
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {
    // return this.orderService.update(+id, updateOrderDto);
    try {
      const allDelivery = await this.orderService.update(id, updateOrderDto);
      response.send({ dtat: allDelivery, message: 'Customer Review Updated Successfully!!' }).status(201);
    } catch (e) {
      response.send({ data: null, message: 'Internal Server Error' }).status(500);
    }

  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    // return this.orderService.remove(+id);
    try {
      const allOrder = await this.orderService.remove(id);
      response.send({ dtat: allOrder, message: 'Order Deleted Successfully!!' }).status(201);
    } catch (e) {
      response.send({ data: null, message: 'Internal Server Error' }).status(500);
    }
  }
}
