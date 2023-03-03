import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose/dist";

@Schema()
export class Register {
    @Prop({
        type:String,
    })
    name:string;

    @Prop({
        type:String,
    })
    email:string;

    @Prop({
        type:String,
    })
    password:string;

    @Prop({
        type:String,
    })
    rePassword:string;
}

export const registerSchema =SchemaFactory.createForClass(Register);

/*list of mongo db data type
   String 
   Integer
   Double
   Boolean
   Array;
   etc...
*/

