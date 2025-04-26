import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3333);

  const url = await app.getUrl();
  console.log(`App running at: ${url}`);
}
bootstrap();
