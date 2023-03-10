import { ApiProperty } from '@nestjs/swagger';

export class CreateFoodCategoryDto {
    @ApiProperty()
    categoryCode: string;

    @ApiProperty()
    categoryName: string;
}
