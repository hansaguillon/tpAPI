import { Controller,Get,Param } from '@nestjs/common';
import { GamesService } from './juegos.service';


@Controller('games')
export class GamesController {
    constructor(private readonly gameService:GamesService){}


@Get()
getAllGames()
    {

        return this.gameService.getGames();
    }

@Get(':id')
getGamePorID(@Param('id')id:number)
{
    return this.gameService.getGamesByID(id);
}


}
