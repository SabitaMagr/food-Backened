import { Controller, Get, Post, UseGuards, Req, Res, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport/dist';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Request, Response } from 'express';
import { Public } from 'src/constraints/meta.constraints';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { JwtAuthGuard } from './jtw-auth.guards';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Public()
  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Body() createAuthDto: CreateAuthDto, @Req() req: Request, @Res() res: Response) {
    // const user=req?.user as User
    const token = await this.authService.login(req?.user);
    return res.send({ data: { token, user: req?.user }, message: 'success' });
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Get('current-user')
  currentUser(@Req() req: Request, @Res() res: Response) {
    try {
      // return req.user;
      console.log(req.user);
      res.send({ message: 'success', data: { user: req?.user }, status: true });
    } catch (e) {
      res.send({ message: 'internal server error', status: false });
    }
  }
}
