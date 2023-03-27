import { ApiProperty } from "@nestjs/swagger";

export class CreateAuthDto {
    @ApiProperty({ default: 'kabita@gamil.com' })
    username: string;

    @ApiProperty({ default: 'kabita@123' })
    password: string;

}
