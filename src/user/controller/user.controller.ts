import { Controller, Get, Param } from '@nestjs/common';
import { UserDTO } from '../dto/users.dto';
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

}
