import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // Allow requests from Next.js frontend
  await app.listen(process.env.PORT ?? 4000); // Change default port to 4000 to avoid conflict with Next.js
}
bootstrap();
