import { Injectable } from '@nestjs/common';
import { IGame } from './juegos.interface';
import { gameDTO } from './juegos.dto';
import * as fs from 'fs';
import * as path from 'path';
import games from '../data/games.json'



@Injectable()
export class GamesService {
private gamesarray:typeof games.games = [];
private jsonFilePath = path.join(__dirname, '..', 'data', 'games.json');
constructor()
{
  this.gamesarray = [... games.games];
}

getGames()
{
    return this.gamesarray;
}

getGamesByID(id:number):IGame
{
  
    const game = this.gamesarray.find(g => {
      const idCondition = g.id === id;
      console.log(`Comparando objeto con id ${g.id}: id === ${id} => ${idCondition}`);
      return idCondition;
    });
    console.log(game);
    return game;
}

getGamesByPlataforma(plataforma : string) : IGame[]
{
    const game = this.gamesarray.filter(g => g.plataforma === plataforma);
    return game;


}

creategame(gamedto: gameDTO): IGame[]{
    const nuevoID = this.createID(this.gamesarray);

    const newGame:IGame = {
    id:nuevoID,
    titulo: gamedto.titulo,
    plataforma : gamedto.plataforma,
    generos : gamedto.generos,
    anioLanzamiento : gamedto.anioLanzamiento,
    calificacion : gamedto.calificacion,
    desarrolladora : gamedto.desarrolladora,
    precio : gamedto.precio
    }
        
    this.gamesarray.push(newGame);
    this.saveGamesToFile();
    return this.gamesarray;
}

deleteGame(id:number):IGame[]{
    const updateGames = this.gamesarray.filter(game => game.id !== id);

    this.saveGamesToFile();

    return updateGames;

}


createID(games:IGame[]):number{
    if(games.length === 0)
        {
            return 1;
        }
    const ultimoId = Math.max(...games.map(game => game.id));
    const nuevoId = ultimoId +1;
    
    return nuevoId;

}

private saveGamesToFile(): void {
    fs.writeFileSync(this.jsonFilePath, JSON.stringify(this.gamesarray, null, 2));
  }
  
}
