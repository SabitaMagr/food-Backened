import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";

@Schema()
export class CustomerReview {
    @Prop({
        type: String,
    })
    firstName: string;

    @Prop({
        type: String,
    })
    lastName: string;

    @Prop({
        type: String,
    })
    email: string;

    @Prop({
        type: String,
    })
    companyName: string;

    @Prop({
        type: String,
    })
    phoneNumber: string;

    @Prop({
        type: String,
    })
    message: string;
}

export const customerReviewSchema = SchemaFactory.createForClass(CustomerReview);

customerReviewSchema.set('toJSON', {
    virtuals: true,
    transform: (doc, ret) => {
        delete ret._id;
        delete ret.__v;
    },
}
);
