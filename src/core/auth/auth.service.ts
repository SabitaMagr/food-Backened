import { Injectable } from '@nestjs/common';
import { RegisterService } from '../register/register.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
  //constructor ko kam k ho c c++ ma padheu ki padhenau la vana  call automatically when some
  // your exam pass garne answe vayo tmro haha  kasare kam hunxa internally ni bujnu parxa hai
  /// in our case  we will inject register server over here so when nest js create this authserveice object
  /// it will automaticall inject  register server instance for us so constructor ko kam vane ko object initialize gane ho

  constructor(
    private readonly registerService: RegisterService,
    private jwtService: JwtService,
  ) {}
  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.registerService.findOneUsingEmail(email);
    if (user) {
      const isMatch = await bcrypt.compare(password, user?.password);
      if (isMatch) {
        const { password, ...result } = user.toJSON();
        return result;
      }
    }
    return null;
  }
  async login(user: any) {
    const { password, ...rest } = user;
    return {
      access_token: this.jwtService.sign(rest),
    };
  }
}
