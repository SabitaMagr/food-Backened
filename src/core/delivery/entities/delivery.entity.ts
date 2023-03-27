import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Delivery {
    @Prop({
        type: String,
    })
    name: string;

    @Prop({
        type: String,
    })
    receiverName: string;

    @Prop({
        type: String,
    })
    receiverAddress: string;


    @Prop({
        type: Date,
    })
    deliveryDate: Date;

    @Prop({
        type: String,
    })
    address: string;

    @Prop({
        type: Number,
    })
    phoneNumber: number;


    @Prop({
        type: String,
    })
    deliveryTime: string;
}

export const deliverySchema = SchemaFactory.createForClass(Delivery);

deliverySchema.set('toJSON', {
    virtuals: true,
    transform: (doc, ret) => {
        delete ret._id;
        delete ret.__v;
    },
}
);