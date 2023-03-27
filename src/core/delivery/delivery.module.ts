import { Module } from '@nestjs/common';
import { DeliveryService } from './delivery.service';
import { DeliveryController } from './delivery.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Delivery, deliverySchema } from './entities/delivery.entity';

@Module({
  imports: [
    //this indicates that employee schema is the part of this module and will be injected in service layer
    MongooseModule.forFeature([
      { name: Delivery.name, schema: deliverySchema }
    ]),
  ],
  controllers: [DeliveryController],
  providers: [DeliveryService],
  exports: [DeliveryService]

})
export class DeliveryModule { }
