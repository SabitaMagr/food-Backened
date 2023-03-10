import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose/dist";

@Schema()
export class FoodCategory {
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

