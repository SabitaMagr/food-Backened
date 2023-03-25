import { ApiProperty } from '@nestjs/swagger';

export class CreateFoodDto {
    @ApiProperty()
    name: string;

    @ApiProperty()
    categoryType: string;

    @ApiProperty()
    price: number;

    @ApiProperty()
    description: string;

    @ApiProperty()
    photo: string;

    @ApiProperty()
    status: string;
}
