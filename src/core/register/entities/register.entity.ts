import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose/dist";

@Schema()
export class Register {

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
}

export const registerSchema = SchemaFactory.createForClass(Register);

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
