import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { Logger } from './app/logger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: new Logger(),
  });

  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: false,
  });

  await app.listen(3000);
}
bootstrap();
