export class AddressDTO {
    readonly id_endereco?: number;
    readonly id_usuario: number;
    readonly logradouro: string;
    readonly numero: string;
    readonly cidade: string;
    readonly uf: string;
    readonly cep: string;
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