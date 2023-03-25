import {
  Controller,
  Get,
  Post,
  Body,
  Res,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RegisterService } from './register.service';
import { CreateRegisterDto } from './dto/create-register.dto';
import { UpdateRegisterDto } from './dto/update-register.dto';
import { ApiTags } from '@nestjs/swagger/dist';
import { Response } from 'express';
import { User } from './entities/register.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
//all the business logic for employee related
//global prefix (employee) for employee module

@Controller('register')
@ApiTags('register')
export class RegisterController {
  constructor(private readonly registerService: RegisterService) { }
  //  url: http://localhost:5000/employee will hit this function using post method


  @Post()
  async create(@Body() createRegisterDto: CreateRegisterDto, @Res() response: Response) {
    try {
      const emailExt = await this.registerService.findOneUsingEmail(createRegisterDto.email)
      if (emailExt) {
        //frontend ma popup message falne hai email already exist vanera
        response.send({ message: 'Email already registered try another email', status: false }).status(400);
      }
      const allUSers = await this.registerService.create(createRegisterDto);
      response.send({ data: allUSers, message: 'Success!!' }).status(201);
    } catch (e) {
      response.send({ data: null, message: 'Internal Server Error' }).status(500);
    }
    // return this.registerService.create(createRegisterDto);
  }
  //  url: http://localhost:5000/employee/454784848486dd4   will hit this function using get method

  @Get()
  async findAll(@Res() response: Response) {
    try {
      const allUsers = await this.registerService.findAll();
      response.send({ data: allUsers, message: 'Success' }).status(201);
    } catch (e) {
      response.send({ data: null, message: 'Internal Server Error' }).status(500);
    }
    // return this.registerService.findAll();
  }
  //  url: http://localhost:5000/employee/454784848486dd4   will hit this function using get method

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() response: Response) {
    try {
      const allEmployee = await this.registerService.findOne(id);
      response.send({ data: allEmployee, message: 'success' }).status(201);
    } catch (e) {
      response.send({ data: null, message: 'internal server error' }).status(500);
    }
    // return this.employeeService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateRegisterDto: UpdateRegisterDto,
    @Res() response: Response) {
    // return this.registerService.update(+id, updateRegisterDto);
    try {
      const register = await this.registerService.update(id, updateRegisterDto);
      return response.send({ data: register, message: 'Successfuly update' }).status(201);
    } catch (e) {
      response.send({ data: null, message: 'internal server error' }).status(500);
    }
  }



  @Delete(':id')
  async remove(@Param('id') id: string, @Res() response: Response) {
    try {
      const register = await this.registerService.remove(id);
      response
        .send({ data: register, message: 'User  Successfully Deleted!' })
        .status(201);
    } catch (e) {
      console.log(e);
      response
        .status(500)
        .send({ data: null, message: 'Internal Server Error' });
    }
  }
}
