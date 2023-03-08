import { ApiProperty } from '@nestjs/swagger';
//input data that might come from frontend

export class CreateRegisterDto {

@ApiProperty()
name:string;

@ApiProperty()
email:string;

@ApiProperty()
password:string;
}
