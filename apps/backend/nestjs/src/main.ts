import { NestFactory } from '@nestjs/core';
import { Application } from './Application';

async function bootstrap() {
  const app = await NestFactory.create(Application);
  await app.listen(3000);
}
bootstrap();
