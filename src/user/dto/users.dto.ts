import { IsEmail, IsNotEmpty } from "class-validator";

export class UserDTO {
    readonly id_usuario?: number;
    
    @IsNotEmpty()
    readonly nome: string;
    
    @IsNotEmpty()
    readonly sobrenome: string;
    
    @IsEmail()
    @IsNotEmpty()
    readonly email: string;
    
    @IsNotEmpty()
    readonly telefone: string;
    
    @IsNotEmpty()
    readonly cpf: string;
}