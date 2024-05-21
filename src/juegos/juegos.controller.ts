import { Controller,Get } from '@nestjs/common';
import { GamesService } from './juegos.service';


@Controller('games')
export class GamesController {
    constructor(private readonly gameService:GamesService){}


@Get()
getAllGames()
    {

        return this.gameService.getGames();
    }


}
