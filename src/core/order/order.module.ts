import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { DeliveryModule } from '../delivery/delivery.module';

@Module({
  controllers: [OrderController],
  providers: [OrderService],
  // imports: [DeliveryModule]
})
export class OrderModule { }
