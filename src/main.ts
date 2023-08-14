import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as margan from 'morgan';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // MIDDLEWARE
  app.use(margan('dev'));

  app.useGlobalPipes(new ValidationPipe(
    {
      whitelist: true,
      forbidNonWhitelisted: true,

      transform: true,
    }
  ));

  await app.listen(3000);
}
bootstrap();
