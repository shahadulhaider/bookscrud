import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LoggingInterceptor } from './shared/logging-interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new LoggingInterceptor());

  app.enableCors({
    origin: true,
  });

  const config = app.get(ConfigService);
  const port = config.get<number>('port');

  await app.listen(port);
  Logger.log(`Server started on ${await app.getUrl()}`, 'Bootstrap');
}
bootstrap();
