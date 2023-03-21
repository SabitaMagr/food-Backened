import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose/dist';
import mongoose, { Document } from 'mongoose';

@Schema()
export class Food {
  @Prop({
    type: String,
  })
  name: string;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'FoodCategory',
  })
  categoryType: string;

  @Prop({
    type: Number,
  })
  price: number;

  @Prop({
    type: String,
  })
  status: string;

  @Prop({
    type: String,
  })
  photo: string;
}

export const foodSchema = SchemaFactory.createForClass(Food);

foodSchema.set('toJSON', {
  virtuals: true,
  transform: (doc, ret) => {
    delete ret._id;
    delete ret.__v;
  },
}
);
