import { AddressDTO, SimpleAddressDTO } from "../dto/address.dto";

export function convertAddressDTOToSimpleAddressDTO(addressDTO: AddressDTO): SimpleAddressDTO {
    return {
        id_endereco: addressDTO.id_endereco,
        id_usuario: addressDTO.id_usuario,
        logradouro: addressDTO.logradouro,
        numero: addressDTO.numero,
        cidade: addressDTO.cidade,
        uf: addressDTO.uf,
        cep: addressDTO.cep,
        bairro: addressDTO.bairro,
        complemento: addressDTO.complemento
    }
}