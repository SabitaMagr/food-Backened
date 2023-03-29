import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { transformAuthInfo } from "passport";

@Schema()
export class Order {
    @Prop({
        type: Number,
    })
    quantity: number;

    @Prop({
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Food',
    })
    foodId: string;

    @Prop({
        type: String,
    })
    userId: string;

    @Prop({
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Delivery',
    })
    deliveryId: string;


}

export const orderSchema = SchemaFactory.createForClass(Order);

orderSchema.set('toJSON', {
    virtuals: true,
    transform: (doc, ret) => {
        delete ret._orderId;
        delete ret._v;
    },
});

