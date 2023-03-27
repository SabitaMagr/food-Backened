import { ApiProperty } from "@nestjs/swagger";

export class CreateDeliveryDto {

    @ApiProperty()
    name: string;

    @ApiProperty()
    deliveryDate: Date;

    @ApiProperty()
    deliveryTime: string;

    @ApiProperty()
    phoneNumber: number;

    @ApiProperty()
    address: string;

    @ApiProperty()
    receiverName: string;

    @ApiProperty()
    receiverAddress: string;

    @ApiProperty()
    receiverPhoneNo: string;
}
