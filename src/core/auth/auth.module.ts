import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { RegisterModule } from '../register/register.module';
import { LocalStrategy } from './local.strategy';

@Module({
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy],
  //register mudle ko service inject garna lako ki register module import garnu parxa kya ...aarko module ko service use gana la ho nita 
  imports: [RegisterModule]
})
export class AuthModule { }
