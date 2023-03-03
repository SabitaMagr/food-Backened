import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import { DocumentBuilder } from '@nestjs/swagger/dist';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('User Registration System')
    .setDescription('API description for me')
    .setVersion('1')
    .build();

    const document = SwaggerModule.createDocument(app,config);
    SwaggerModule.setup('api',app,document);

    app.enableCors()
  await app.listen(3000);

}
bootstrap();
