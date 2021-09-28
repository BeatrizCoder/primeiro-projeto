
import {ValidationPipe} from '@nestjs/common';
import {NestFactory}    from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap(){
  const app =await NestFactory.create(AppModule, {cor:true});

  app.useGlobalPipes(
    new ValidationPipe({
      transform:true,
      whitelist:true,
      forbidNonWhiteListed: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
