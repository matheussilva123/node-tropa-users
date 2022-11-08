import { forwardRef, Inject, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/user/model/user";
import { UserService } from "src/user/service/user.service";
import { Repository } from "typeorm";
import { AddressDTO } from "../dto/address.dto";
import { AddressNotFoundException } from "../exception/address.not.found.exception";
import { Address } from "../model/address";

@Injectable()
export class AddressService {
    constructor(
        @InjectRepository(Address)
        private readonly addressRepository: Repository<Address>,
        @Inject(forwardRef(() => UserService))
        private userService: UserService
    ) {}

    async findOne(id_endereco: number): Promise<AddressDTO> {
      const user = await this.addressRepository.findOneBy({ id_endereco });
      if(user === null) {
        throw new AddressNotFoundException();
      }
      return user;
    }

    async findAllByUserId(userId: number): Promise<Address[]> {
        const user = await this.userService.findOne(userId);
        return await this.addressRepository.find({
            relations: {
                user: true
            },
            where: {user: user}
        });
    }

    async findAllByUser(user: User): Promise<Address[]> {
        return await this.addressRepository.find({
            relations: {
                user: true
            },
            where: {user: user}
        });
    }

    async deleteById(id_endereco: number): Promise<void> {
        await this.findOne(id_endereco);

        await this.addressRepository.delete(id_endereco);
    }

    async delete(address: Address): Promise<void> {
        await this.addressRepository.delete(address);
    }

    async create(addressDTO: AddressDTO): Promise<AddressDTO> {
        await this.userService.findOne(addressDTO.id_usuario);
        return this.addressRepository.save(addressDTO)
    }

    async update(id_endereco: number, addressDTO: AddressDTO): Promise<AddressDTO> {
        await this.findOne(id_endereco);
        await this.addressRepository.update({id_endereco}, addressDTO); 
    
        return await this.findOne(id_endereco);
    }

}