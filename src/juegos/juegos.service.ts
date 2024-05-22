import { Injectable } from '@nestjs/common';
import { IGame } from './juegos.interface';
import * as fs from 'fs';
import * as path from 'path';

const jsonPath = path.join(__dirname, '..', 'data', 'games.json');

@Injectable()
export class GamesService {
    private games: IGame[] = require(jsonPath);

getGames()
{
    return this.games;
}






private saveGamesToFile(): void {
    fs.writeFileSync(jsonPath, JSON.stringify(this.games, null, 2));
  }
}
