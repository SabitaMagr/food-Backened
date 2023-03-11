import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose/dist";
import mongoose, { Document } from "mongoose";

@Schema()
export class FoodCategory extends Document {

    @Prop({
        type: String,
    })
    categoryCode: string;

    @Prop({
        type: String,
    })
    categoryName: string;

}

export const foodCategorySchema = SchemaFactory.createForClass(FoodCategory);


foodCategorySchema.set('toJSON', {
    virtuals: true,
    transform: (doc, ret) => {
        delete ret._id;
        delete ret.__v;
    },
});

// // foodCategorySchema.virtual('id').get(function () {
// //     return this._id.toHexString();
// // });
