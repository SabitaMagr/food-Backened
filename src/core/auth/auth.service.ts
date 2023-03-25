import { Injectable } from '@nestjs/common';
import { RegisterService } from '../register/register.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthService {
  //constructor ko kam k ho c c++ ma padheu ki padhenau la vana  call automatically when some
  // your exam pass garne answe vayo tmro haha  kasare kam hunxa internally ni bujnu parxa hai
  /// in our case  we will inject register server over here so when nest js create this authserveice object 
  /// it will automaticall inject  register server instance for us so constructor ko kam vane ko object initialize gane ho

  constructor(private readonly registerService: RegisterService) {
  }
  //java ma chai yesaer hunxa hai example  but js ma testo garnu pardina hai
  // register service inject ganu parx akxin jabarjasti garera hunna kya service inject garnu parxa register moudle ko 
  async validateUser(email: string, password: string): Promise<any> {
    // wait mistake raixa
    const user = await this.registerService.findOneUsingEmail(email);
    //bujheu
    if (user) {
      const isMatch = await bcrypt.compare(password, user?.password);
      if (isMatch) {
        const { password, ...result } = user;
        return result;
      }
    }
    return null;
  }

}
