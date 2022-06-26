import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  app.setGlobalPrefix('api');
  const config = app.get(ConfigService);
  const port = config.get<number>('port');

  await app.listen(8000);
  Logger.log(`Server started on ${await app.getUrl()}`, 'Bootstrap');
}
bootstrap();
