import { Injectable } from '@nestjs/common';
import { IGame } from './juegos.interface';
import { gameDTO } from './juegos.dto';
import * as fs from 'fs';
import * as path from 'path';
import games from '../data/games.json'



@Injectable()
export class GamesService {
private gamesarray:typeof games = [];
private jsonFilePath = path.join(__dirname ,'..','..','src' ,'data','games.json');
constructor()
{
  this.gamesarray = [... games];

}

  

getGames()
{
    return this.gamesarray;

}

getGamesByID(id2:number):IGame
{
  
    const game = this.gamesarray.find(g => g.id === id2
    );
    return game;
}

getGamesByPlataforma(plataforma : string) : IGame[]
{
    const game = this.gamesarray.filter(g => g.plataforma === plataforma);
    return game;


}

creategame(gamedto: gameDTO): IGame{
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
    this.saveGamesToFile(this.gamesarray);
    return newGame;
}

deleteGame(id:number){
    const updateGames = this.gamesarray.filter(game => game.id !== id);

    this.saveGamesToFile(updateGames);
    return `El Juego con ID: `+ id +` fue eliminado`;

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

private saveGamesToFile(saveGames: IGame[]): void {
    try {
      console.log('Ruta del archivo:', this.jsonFilePath);
      fs.writeFileSync(this.jsonFilePath, JSON.stringify(saveGames, null, 2));
      console.log('Datos guardados correctamente');
    } catch (err) {
      console.error('Error al guardar datos:', err);
    }}
  
}
