import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateDeliveryDto } from './dto/create-delivery.dto';
import { UpdateDeliveryDto } from './dto/update-delivery.dto';
import { Delivery } from './entities/delivery.entity';

@Injectable()
export class DeliveryService {
  constructor(@InjectModel(Delivery.name) private deliveryModel: Model<Delivery>) { }
  async create(CreateDeliveryDto: CreateDeliveryDto) {
    const delivery = await this.deliveryModel.create({
      name: CreateDeliveryDto.name,
      receiverName: CreateDeliveryDto.receiverName,
      receiverAddress: CreateDeliveryDto.receiverAddress,
      receiverPhoneNo: CreateDeliveryDto.receiverPhoneNo,
      address: CreateDeliveryDto.address,
      phoneNumber: CreateDeliveryDto.phoneNumber,
      deliveryDate: CreateDeliveryDto.deliveryDate,
      deliveryTime: CreateDeliveryDto.deliveryTime
    });
    return delivery;
  }

  findAll() {
    return `This action returns all delivery`;
  }

  findOne(id: string) {
    return this.deliveryModel.findOne({ _id: id });
  }

  async update(id: string, updateDeliveryDto: UpdateDeliveryDto) {
    const delivery = await this.deliveryModel.findOne({ _id: id });
    delivery.name = updateDeliveryDto?.name,
      delivery.address = updateDeliveryDto?.address,
      delivery.phoneNumber = updateDeliveryDto?.phoneNumber,
      delivery.receiverName = updateDeliveryDto?.receiverName,
      delivery.receiverAddress = updateDeliveryDto?.receiverAddress,
      delivery.receiverPhoneNo = updateDeliveryDto?.receiverPhoneNo,
      delivery.deliveryDate = updateDeliveryDto?.deliveryDate,
      delivery.deliveryTime = updateDeliveryDto?.deliveryTime
  }

  remove(id: string) {
    return this.deliveryModel.deleteOne({ _id: id }).exec();

  }
}
