import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CustomerReviewService } from './customer-review.service';
import { CreateCustomerReviewDto } from './dto/create-customer-review.dto';
import { UpdateCustomerReviewDto } from './dto/update-customer-review.dto';
import { response, Response } from 'express';



@Controller('contact')
@ApiTags('contact')
export class CustomerReviewController {
  constructor(private readonly customerReviewService: CustomerReviewService) { }

  @Post()
  async create(@Body() createCustomerReviewDto: CreateCustomerReviewDto, @Res() response: Response) {
    try {
      const allCustomerReview = await this.customerReviewService.create(createCustomerReviewDto);
      response.send({ data: allCustomerReview, message: 'Success!!' }).status(201);
    } catch (e) {
      response.send({ data: null, message: 'Internal Server Error' }).status(500);
    }
    // return this.customerReviewService.create(createCustomerReviewDto);
  }

  @Get()
  async findAll(@Res() response: Response) {
    try {
      const allCustomerReview = await this.customerReviewService.findAll();
      response.send({ dtat: allCustomerReview, message: 'Success!!' }).status(201);
    } catch (e) {
      response.send({ data: null, message: 'Internal Server Error' }).status(500);
    }
    // return this.customerReviewService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() response: Response) {
    try {
      const allCustomerReview = await this.customerReviewService.findOne(id);
      response.send({ dtat: allCustomerReview, message: 'Success!!' }).status(201);
    } catch (e) {
      response.send({ data: null, message: 'Internal Server Error' }).status(500);
    }
    // return this.customerReviewService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateCustomerReviewDto: UpdateCustomerReviewDto) {
    // return this.customerReviewService.update(+id, updateCustomerReviewDto);
    try {
      const allCustomerReview = await this.customerReviewService.update(id, updateCustomerReviewDto);
      response.send({ dtat: allCustomerReview, message: 'Customer Review Updated Successfully!!' }).status(201);
    } catch (e) {
      response.send({ data: null, message: 'Internal Server Error' }).status(500);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      const allCustomerReview = await this.customerReviewService.remove(id);
      response.send({ dtat: allCustomerReview, message: 'Customer Review Deleted Successfully!!' }).status(201);
    } catch (e) {
      response.send({ data: null, message: 'Internal Server Error' }).status(500);
    }
    // return this.customerReviewService.remove(+id);
  }
}
