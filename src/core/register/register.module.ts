import { Module } from '@nestjs/common';
import { RegisterService } from './register.service';
import { RegisterController } from './register.controller';
import { MongooseModule } from '@nestjs/mongoose/dist';
import { User, registerSchema } from './entities/register.entity';

@Module({
  imports: [
    //this indicates that employee schema is the part of this module and will be injected in service layer
    MongooseModule.forFeature([
      { name: User.name, schema: registerSchema }
    ]),
  ],
  controllers: [RegisterController],
  providers: [RegisterService],
  exports: [RegisterService]
})
export class RegisterModule { }
