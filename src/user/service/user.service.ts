import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDTO } from '../dto/users.dto';
import { User } from '../model/user';

@Injectable()
export class UserService {
    constructor(
      @InjectRepository(User)
      private userRepository: Repository<User>
    ) {}

  findOne(id_usuario: number): Promise<UserDTO> {
    return this.userRepository.findOneBy({ id_usuario })
  }
  

}
