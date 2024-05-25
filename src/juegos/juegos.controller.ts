import { Body, Controller,Delete,Get,Param, Post } from '@nestjs/common';
import { GamesService } from './juegos.service';
import { ParseIntPipe } from '@nestjs/common';
import { gameDTO } from './juegos.dto';


@Controller('games')
export class GamesController {
    constructor(private readonly gameService:GamesService){}


@Get()
getAllGames()
    {

        return this.gameService.getGames();
    }

@Get(':id')
getGamePorID(@Param('id',ParseIntPipe)id:number)
{
    return this.gameService.getGamesByID(id);
}
@Get('plataforma/:plataforma')
getGamePorPlataforma(@Param('plataforma')plataforma:string)
{
    return this.gameService.getGamesByPlataforma(plataforma);
}

@Post()
create(@Body() dtojuego:gameDTO)
{
    
    return this.gameService.creategame(dtojuego);
}

@Delete(':id')
deleteGame(@Param('id',ParseIntPipe) id:number)
{
    return this.gameService.deleteGame(id);
}

}
