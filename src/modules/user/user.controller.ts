import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { UserDTO } from './user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create (@Body() data: UserDTO){
    return this.userService.create(data);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: UserDTO ) {
    return this.userService.update(id, data);
  }
}
