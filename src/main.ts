import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import { DocumentBuilder } from '@nestjs/swagger/dist';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // swagger connection start 
  const config = new DocumentBuilder()
    .setTitle('User Registration System')
    .setDescription('API description for me')
    .setVersion('1')
    .addServer('/api')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // swagger connection end 

  // app.enableCors({ origin: ['localhost:3000'] })
  app.enableCors();   //accept all the request
  app.setGlobalPrefix('/api');   ///5000/api wala 
  await app.listen(5000);   //server port no 
}
bootstrap();
