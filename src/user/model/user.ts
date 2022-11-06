import { Address } from "src/address/model/address";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "usuarios"})
export class User {

    @PrimaryGeneratedColumn()
    id_usuario: number;

    @Column({name: 'nome'})
    nome: string;
    
    @Column({name: 'sobrenome'})
    sobrenome: string;

    @Column({name: 'email', unique: true})
    email: string;

    @Column({name: 'telefone'})
    telefone: string;

    @Column({name: 'cpf', unique: true})
    cpf: string;
    
    @OneToMany(() => Address, address => address.user)
    address?: Address[];

}