import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose/dist";

@Schema()
export class User {

    @Prop({
        type: String,
    })
    name: string;

    @Prop({
        type: String,
    })
    email: string;

    @Prop({
        type: String,
    })
    password: string;


    @Prop({
        type: String,
    })
    role: string;

    @Prop({
        type: String,
    })
    address: string;

    @Prop({
        type: Number,
    })
    phoneNumber: number;

}

export const registerSchema = SchemaFactory.createForClass(User);

registerSchema.set('toJSON', {
    virtuals: true,
    transform: (doc, ret) => {
        delete ret._id;
        delete ret.__v;
    },
});

registerSchema.virtual('id').get(function () {
    return this._id.toHexString();
});


// @Prop([{
//     type: String,

// }])
// email: string[];
