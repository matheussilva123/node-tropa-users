import { Body, Controller, DefaultValuePipe, Delete, Get, HttpCode, Param, ParseIntPipe, Post, Query } from '@nestjs/common';
import { Pagination } from 'nestjs-typeorm-paginate';
import { UserDTO } from '../dto/users.dto';
import { User } from '../model/user';
import { UserService } from '../service/user.service';

@Controller('api/usuarios')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  findOne(
    @Param('id')
    id: number
  ): Promise<UserDTO> {
    return this.userService.findOne(id);
  }

  @Get()
  findAll(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number = 10,
  ): Promise<Pagination<User>> {
    return this.userService.findAllByPageable({page,limit});
  }

  @Post()
  create(@Body() userDTO: UserDTO): Promise<void> {
    return this.userService.create(userDTO);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.userService.delete(id);
  }

}
