import { Module } from '@nestjs/common';
import { RegisterService } from './register.service';
import { RegisterController } from './register.controller';
import { MongooseModule } from '@nestjs/mongoose/dist';
import { Register, registerSchema } from './entities/register.entity';

@Module({
  imports:[
        //this indicates that employee schema is the part of this module and will be injected in service layer
    MongooseModule.forFeature([
      {name:Register.name, schema:registerSchema}
    ]),
  ],
  controllers: [RegisterController],
  providers: [RegisterService]
})
export class RegisterModule {}
