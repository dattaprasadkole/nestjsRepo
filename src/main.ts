import { ValidationPipe, BadRequestException } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    exceptionFactory: validationErrors => new BadRequestException({errors: validationErrors})    
  }));
  console.log('listening on port : 5000');
  await app.listen(5000);
}
bootstrap();
