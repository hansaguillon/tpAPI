import { Injectable } from '@nestjs/common';
import { IGame } from './juegos.interface';
import games from '../data/games.json';

@Injectable()
export class GamesService {

getGames()
{
    return games;
}


}
