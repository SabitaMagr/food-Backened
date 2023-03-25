import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport/dist';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }
  @UseGuards(AuthGuard('local'))
  @Post('login')
  login(@Request() req) {
    return req.user;
  }
  //ho  login ko implement garna lako sbaai framework le deko
  @Get('/current-user')
  currentUser() {

  }
}

// backend downhaha 
///tesare hunna kya feri erro aauxa eerro k ho herna huntheyo troubleshot garna sajilo hunxa