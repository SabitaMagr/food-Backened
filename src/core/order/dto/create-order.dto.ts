import { ApiProperty } from "@nestjs/swagger";

export class CreateOrderDto {

    @ApiProperty()
    order: {
        foodId: string;
        quantity: number;
        userId: string;
    }[]

    @ApiProperty()
    delivery: {
        name: string;
        deliveryDate: Date;
        deliveryTime: string;
        phoneNumber: number;
        address: string;
        receiverName: string;
        receiverAddress: string;
        receiverPhoneNo: string;
    }


}
