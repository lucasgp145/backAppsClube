import { Controller, Get } from '@nestjs/common';
import { KidsService } from './kids.service';

@Controller('kids')
export class KidsController {
  constructor(private readonly kidsService: KidsService) {}

  @Get()
  async findAll(){
    return this.kidsService.findKids();
  }
}
