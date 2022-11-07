import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/user/model/user";
import { Repository } from "typeorm";
import { Address } from "../model/address";

@Injectable()
export class AddressService {
    constructor(
        @InjectRepository(Address)
        private readonly addressRepository: Repository<Address>
    ) {}

    async findAllByUser(user: User): Promise<Address[]> {
        return await this.addressRepository.find({
            relations: {
                user: true
            },
            where: {user: user}
        });
    }

    async delete(address: Address): Promise<void> {
        await this.addressRepository.delete(address);
    }

}