import { Controller, Get } from '@nestjs/common';
import { AppsService } from './apps.service';

@Controller('apps')
export class AppsController {
  constructor(private readonly appsService: AppsService) {}

    @Get()
    async findAll(){
      return this.appsService.findApps();
    }
  
}
