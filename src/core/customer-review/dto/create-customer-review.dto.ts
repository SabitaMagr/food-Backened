import { ApiProperty } from "@nestjs/swagger";

export class CreateCustomerReviewDto {
    @ApiProperty()
    firstName: string;

    @ApiProperty()
    lastName: string;

    @ApiProperty()
    email: string;

    @ApiProperty()
    companyName: string;

    @ApiProperty()
    phoneNumber: string;

    @ApiProperty()
    message: string;
}
