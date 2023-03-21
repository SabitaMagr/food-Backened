import { Module } from '@nestjs/common';
import { CustomerReviewService } from './customer-review.service';
import { CustomerReviewController } from './customer-review.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomerReview, customerReviewSchema } from './entities/customer-review.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: CustomerReview.name, schema: customerReviewSchema }
    ]),
  ],
  controllers: [CustomerReviewController],
  providers: [CustomerReviewService]
})
export class CustomerReviewModule { }




