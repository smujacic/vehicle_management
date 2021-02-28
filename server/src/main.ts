import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as shell from 'shelljs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  shell.exec('./import.sh');

  app.enableCors();
  await app.listen(3000);
}
bootstrap();
