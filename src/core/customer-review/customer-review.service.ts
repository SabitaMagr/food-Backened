import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Mode } from 'fs';
import { Model } from 'mongoose';
import { CreateCustomerReviewDto } from './dto/create-customer-review.dto';
import { UpdateCustomerReviewDto } from './dto/update-customer-review.dto';
import { CustomerReview } from './entities/customer-review.entity';


@Injectable()
export class CustomerReviewService {
  constructor(
    @InjectModel(CustomerReview.name) private customerReviewModel: Model<CustomerReview>,
  ) { }
  async create(createCustomerReviewDto: CreateCustomerReviewDto) {
    const customerReview = await this.customerReviewModel.create({
      firstName: createCustomerReviewDto.firstName,
      lastName: createCustomerReviewDto.lastName,
      email: createCustomerReviewDto.email,
      companyName: createCustomerReviewDto.companyName,
      phoneNumber: createCustomerReviewDto.phoneNumber,
      message: createCustomerReviewDto.message,
    });
    return customerReview;
    // return 'This action adds a new customerReview';
  }

  findAll() {
    return this.customerReviewModel.find({}, { __v: 0 });
  }

  findOne(id: string) {
    return this.customerReviewModel.findOne({ _id: id });
  }

  update(id: string, updateCustomerReviewDto: UpdateCustomerReviewDto) {
    return this.customerReviewModel.updateOne({ _id: id }), updateCustomerReviewDto;
  }

  remove(id: string) {
    return this.customerReviewModel.deleteOne({ _id: id });
  }
}


