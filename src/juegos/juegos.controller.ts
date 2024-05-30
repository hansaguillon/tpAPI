import { Body, Controller,Delete,Get,Param, Patch, Post,Put,ValidationPipe,UsePipes } from '@nestjs/common';
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
@Put(':id')
@UsePipes(new ValidationPipe({ whitelist: true }))
putGame(@Param('id',ParseIntPipe)id:number,@Body()newGame:gameDTO)
{
    return this.gameService.reemplazarGame(id,newGame);
}

@Patch(':id')
@UsePipes(new ValidationPipe({ whitelist: true,transform: true }))
patchGame(@Param('id',ParseIntPipe)id:number,@Body()game:Partial<gameDTO>)
{
    return this.gameService.actualizarGame(id,game);
}

@Post()
@UsePipes(new ValidationPipe({ whitelist: true }))
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
