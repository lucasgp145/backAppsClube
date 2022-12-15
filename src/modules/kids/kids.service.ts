import { Injectable } from '@nestjs/common';

@Injectable()
export class KidsService {

    findKids(){
        let kids = [
            {
                name: "kids1",
                region: "all"
            },

            {
                name: "kids2",
                region: "all"
            },
            {
                name: "kids3",
                region: "Brazilian"
            }
        ] 

        return kids
    }
}
