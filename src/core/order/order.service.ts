import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DeliveryService } from '../delivery/delivery.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';

@Injectable()
export class OrderService {
  constructor(@InjectModel(Order.name) private orderModel: Model<Order>,
    private deliveryService: DeliveryService
  ) { }
  async create(createOrderDto: CreateOrderDto) {
    //save delivery 
    const delivery = await this.deliveryService.create(createOrderDto?.delivery)
    // save order  in loop
    if (delivery) {
      for (let order of createOrderDto?.order) {
        let od = await this.orderModel.create({
          deliveryId: delivery.id,
          foodId: order?.foodId,
          quantity: order?.quantity,
          userId: order?.userId
        })
      }
    }

    // const order = await this.orderModel.create({
    //   foodId: createOrderDto?.
    // });
    return "success";
  }

  findAll() {
    // return `This action returns all order`;
    return this.orderModel.findOne();

  }

  findOne(id: string) {
    return this.orderModel.findOne({ _id: id });
  }

  async update(id: string, updateOrderDto: UpdateOrderDto) {
    // return `This action updates a #${id} order`;
    const order = await this.orderModel.findOne({ _id: id });
    // order.orderId = updateOrderDto?.orderId,
    //   order.foodName = updateOrderDto?.foodName,
    //   order.price = updateOrderDto?.price,
    //   order.quantity = updateOrderDto?.quantity,
    //   order.total = updateOrderDto?.total
  }

  remove(id: string) {
    return this.orderModel.deleteOne({ _id: id }).exec();
  }
}
