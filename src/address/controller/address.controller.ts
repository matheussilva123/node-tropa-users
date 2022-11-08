import { Body, Controller, Get, Param, ParseIntPipe, Post } from "@nestjs/common";
import { AddressDTO, SimpleAddressDTO } from "../dto/address.dto";
import { AddressService } from "../service/address.service";
import { convertAddressDTOToSimpleAddressDTO } from "../utils/converter";


@Controller('api/enderecos-usuario')
export class AddressController {
    constructor(private readonly addressService: AddressService) {}
    
    @Get(':id')
    findOne(
      @Param('id', ParseIntPipe)
      id: number
    ): Promise<AddressDTO> {
      return this.addressService.findOne(id);
    }

    @Get('/users/:userId')
    async findAllByUserId(
        @Param('userId', ParseIntPipe)
        userId: number
    ): Promise<SimpleAddressDTO[]> {
        const address = await this.addressService.findAllByUserId(userId);
        return address.map(convertAddressDTOToSimpleAddressDTO);
    }

    @Post()
    create(@Body() addressDTO: AddressDTO): Promise<AddressDTO> {
        return this.addressService.create(addressDTO);
    } 
    
}