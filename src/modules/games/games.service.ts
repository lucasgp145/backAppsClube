import { Injectable } from '@nestjs/common';

@Injectable()
export class GamesService {

    findGames(){
        let games = [
            {
                name: "game1",
                region: "all"
            },

            {
                name: "game2",
                region: "all"
            },
            {
                name: "game3",
                region: "Brazilian"
            }
        ] 

        return games
    }
}
