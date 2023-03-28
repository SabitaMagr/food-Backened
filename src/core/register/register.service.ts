import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose/dist';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { CreateRegisterDto } from './dto/create-register.dto';
import { UpdateRegisterDto } from './dto/update-register.dto';
import { User } from './entities/register.entity';

@Injectable()
export class RegisterService {
  //on constructer we inject register model instance to intract with employee collection in db
  constructor(@InjectModel(User.name) private registerModal: Model<User>) {}

  async create(createRegisterDto: CreateRegisterDto) {
    const hashPassowrd = await bcrypt.hash(createRegisterDto.password, 10);
    const register = await this.registerModal.create({
      name: createRegisterDto.name,
      email: createRegisterDto.email,
      role: createRegisterDto.role,
      address: createRegisterDto.address,
      phoneNumber: createRegisterDto.phoneNumber,
      password: hashPassowrd,
    });
    const { password, ...rest } = register;
    return rest;
  }

  findAll() {
    //similar to select * from employees

    return this.registerModal.find({}, { __v: 0 });
  }

  findOne(id: string) {
    return this.registerModal.findOne({ _id: id });
  }

  findOneUsingEmail(email: string) {
    //finding user record using email
    return this.registerModal.findOne({ email: email }).exec();
  }

  update(id: string, updateRegisterDto: UpdateRegisterDto) {
    return this.registerModal.updateOne({ _id: id }), updateRegisterDto;
  }

  remove(id: string) {
    return this.registerModal.deleteOne({ _id: id });
  }
}
