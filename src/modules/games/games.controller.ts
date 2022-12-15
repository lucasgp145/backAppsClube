import { Controller, Get } from '@nestjs/common';
import { get } from 'http';
import { GamesService } from './games.service';

@Controller('games')
export class GamesController {
  constructor(private readonly gamesService: GamesService) {}

  @Get()
  async findAll(){
    return this.gamesService.findGames();
  }
}
