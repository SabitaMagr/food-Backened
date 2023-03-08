import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose/dist";

@Schema()
export class Register {
    @Prop({
        type:Number,
    })
    id:number;
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

