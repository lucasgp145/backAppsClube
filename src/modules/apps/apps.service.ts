import { Injectable } from '@nestjs/common';

@Injectable()
export class AppsService {
    findApps(){
        let apps = [
            {
                name: "app1",
                region: "all"
            },

            {
                name: "app2",
                region: "all"
            },
            {
                name: "app3",
                region: "Brazilian"
            }
        ] 

        return apps
    }

}
