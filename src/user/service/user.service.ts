import { Catch, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IPaginationOptions, paginate, Pagination } from 'nestjs-typeorm-paginate';
import { AddressService } from 'src/address/service/address.service';
import { Not, Repository } from 'typeorm';
import { UserDTO } from '../dto/users.dto';
import { UserCpfExistsException } from '../exception/user.cpf.exists.exception';
import { UserEmailExistsException } from '../exception/user.email.exists.exception';
import { UserNotFoundException } from '../exception/user.not.found.exception';
import { User } from '../model/user';
import { convertUserDTOToUser} from '../utils/converter';

@Injectable()
export class UserService {
    constructor(
      @InjectRepository(User)
      private readonly userRepository: Repository<User>,
      private readonly addressService: AddressService
    ) {}

  async findOne(id_usuario: number): Promise<UserDTO> {
    const user = await this.userRepository.findOneBy({ id_usuario });
    if(user === null) {
      throw new UserNotFoundException();
    }
    return user;
  }

  async findAllByPageable(paginationOptions: IPaginationOptions): Promise<Pagination<User>> {
    return await paginate<User>(this.userRepository, paginationOptions);
  }

  async create(userDTO: UserDTO): Promise<void> {
    if (await this.checkIfTheEmailExists(userDTO.email)) {
      throw new UserEmailExistsException();
    }
    if (await this.checkIfTheCpfExists(userDTO.cpf)) {
      throw new UserCpfExistsException();
    }
    await this.userRepository.save(userDTO);
  }

  async delete(userId: number): Promise<void> {
    const userDTO = await this.findOne(userId);
    const address = this.addressService.findAllByUser(convertUserDTOToUser(userDTO));
    
    (await address).map(address => this.addressService.delete(address));

    await this.userRepository.delete(userDTO);
  }

  async update(userId: number, userDTO: UserDTO): Promise<UserDTO> {
    await this.findOne(userId);

    if(await this.checkIfTheAnotherCpfExists(userDTO.cpf, userId)) {
      throw new UserCpfExistsException();
    }

    if(await this.checkIfTheAnotherEmailExists(userDTO.email, userId)) {
      throw new UserEmailExistsException();
    }

    await this.userRepository.update({id_usuario: userId}, convertUserDTOToUser(userDTO));
    return this.findOne(userId);
  }

  private async checkIfTheAnotherCpfExists(cpf: string, userId: number): Promise<boolean> {
    const user = await this.userRepository.findOne({
      where: {
        cpf
      }
    });
          
    if(user == null || user == undefined) {
      return false;
    }

    if(user.id_usuario === userId) {
      return false;
    }

    return true;
  }

  private async checkIfTheAnotherEmailExists(email: string, userId: number): Promise<boolean> {
    const user = await this.userRepository.findOne({
      where: {
        email
      }
    });

    if(user == null || user == undefined) {
      return false;
    }

    if(user.id_usuario === userId) {
      return false;
    }

    return true;
  }

  private async checkIfTheCpfExists(cpf: string): Promise<boolean> {
    const user = await this.userRepository.findOne({
      where: {
        cpf
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
          email
        }
      });

      if (user === null || user === undefined) {
          return false;
      }
      return true;
  }
  

}
