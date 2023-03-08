import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose/dist';
import { Model } from 'mongoose';
import { CreateRegisterDto } from './dto/create-register.dto';
import { UpdateRegisterDto } from './dto/update-register.dto';
import { Register } from './entities/register.entity';

@Injectable()
export class RegisterService {
    //on constructer we inject register model instance to intract with employee collection in db
  constructor(
    @InjectModel(Register.name) private  registerModal:Model<Register>,
  ){}

  create(createRegisterDto: CreateRegisterDto) {
    const register=this.registerModal.create({
      name:createRegisterDto.name,
      email:createRegisterDto.email,
      password:createRegisterDto.password,
    });
    return register;
  }

  findAll() {
        //similar to select * from employees

    return this.registerModal.find({}, {__v:0});
  }

  findOne(id: string) {
    return this.registerModal.findOne({ _id:id});
  }

  update(id: string, updateRegisterDto: UpdateRegisterDto) {
    return this.registerModal.updateOne({_id:id}) ,updateRegisterDto;
  }

  remove(id: number) {
    return this.registerModal.deleteOne({_id:id});
  }
}
