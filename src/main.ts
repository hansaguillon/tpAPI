import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { NotFoundExceptionFilter } from './not-found-exception.filter';


async function bootstrap() {
  const app = await NestFactory.create(AppModule,);
  app.useGlobalPipes(new ValidationPipe(
   { whitelist:true,}
  ));
  //app.useGlobalFilters(new NotFoundExceptionFilter());
  await app.listen(3000);
}
bootstrap();
