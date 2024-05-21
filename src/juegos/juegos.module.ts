import { Module } from '@nestjs/common';
import { GamesController } from './juegos.controller';
import { GamesService } from './juegos.service';

@Module({
    controllers: [GamesController],
    providers: [GamesService]
})
export class JuegosModule {}
