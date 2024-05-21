import { Module } from '@nestjs/common';
import { JuegosModule } from './juegos/juegos.module';

@Module({
  imports: [JuegosModule],
})
export class AppModule {}
