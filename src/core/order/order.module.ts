import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { DeliveryModule } from '../delivery/delivery.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Order, orderSchema } from './entities/order.entity';

@Module({
  controllers: [OrderController],
  providers: [OrderService],
  imports: [DeliveryModule, MongooseModule.forFeature([{ name: Order.name, schema: orderSchema }])]
})
export class OrderModule { }
