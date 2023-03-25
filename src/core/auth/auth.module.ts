import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { RegisterModule } from '../register/register.module';
import { LocalStrategy } from './local.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt/dist';
import { JwtStrategy } from './jwt.strategy';

@Module({
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  //register mudle ko service inject garna lako ki register module import garnu parxa kya ...aarko module ko service use gana la ho nita
  imports: [
    RegisterModule,
    PassportModule.register({
      defaultStrategy: 'local',
    }),
    JwtModule.register({
      secret: process?.env?.jwt_secret || 'secret',
      signOptions: {
        expiresIn: '1h',
      },
    }),
  ],
})
export class AuthModule {}
