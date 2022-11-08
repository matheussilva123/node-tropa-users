import { IsNotEmpty } from "class-validator";

export class AddressDTO {
    readonly id_endereco?: number;
    
    readonly id_usuario: number;

    @IsNotEmpty()
    readonly logradouro: string;
    
    @IsNotEmpty()
    readonly numero: string;

    @IsNotEmpty()
    readonly cidade: string;

    @IsNotEmpty()
    readonly uf: string;

    @IsNotEmpty()
    readonly cep: string;
    
    @IsNotEmpty()
    readonly bairro: string;

    readonly complemento?: string;
}

export class SimpleAddressDTO {
    readonly id_endereco: number;
    readonly id_usuario: number;
    readonly logradouro: string;
    readonly numero: string;
    readonly cidade: string;
    readonly uf: string;
    readonly cep: string;
    readonly bairro: string;
    readonly complemento?: string;
}