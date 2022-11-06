import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IPaginationOptions, paginate, Pagination } from 'nestjs-typeorm-paginate';
import { Repository } from 'typeorm';
import { UserDTO } from '../dto/users.dto';
import { UserCpfExistsException } from '../exception/user.cpf.exists.exception';
import { UserEmailExistsException } from '../exception/user.email.exists.exception';
import { User } from '../model/user';

@Injectable()
export class UserService {
    constructor(
      @InjectRepository(User)
      private readonly userRepository: Repository<User>
    ) {}

  async findOne(id_usuario: number): Promise<UserDTO> {
    return await this.userRepository.findOneBy({ id_usuario });
  }

  async findAll(paginationOptions: IPaginationOptions): Promise<Pagination<User>> {
    return await paginate<User>(this.userRepository, paginationOptions);
  }

  async create(user: UserDTO): Promise<void> {
    if (await this.checkIfTheEmailExists(user.email)) {
      throw new UserEmailExistsException();
    }
    if (await this.checkIfTheCpfExists(user.cpf)) {
      throw new UserCpfExistsException();
    }
    await this.userRepository.save(user);
  }


  private async checkIfTheCpfExists(cpf: string): Promise<boolean> {
    const user = await this.userRepository.findOne({
      where: {
        cpf: cpf
      }
    });

    if (user === null || user === undefined) {
      return false;
    }
    return true;
  }

  private async checkIfTheEmailExists(email: string): Promise<boolean> {
      const user = await this.userRepository.findOne({
        where: {
          email: email
        }
      });


      if (user === null || user === undefined) {
          return false;
      }
      return true;
  }
  

}
