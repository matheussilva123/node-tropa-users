import { User } from "src/user/model/user";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "enderecos_usuarios"})
export class Address {

    @PrimaryGeneratedColumn()
    id_endereco: number;

    @Column({name: 'id_usuario'})
    id_usuario: number;

    @Column({name: 'logradouro'})
    logradouro: string;

    @Column({name: 'numero'})
    numero: string;

    @Column({name: 'cidade'})
    cidade: string;

    @Column({name: 'uf'})
    uf: string;

    @Column({name: 'cep'})
    cep: string;

    @Column({name: 'bairro'})
    bairro: string;

    @Column({name: 'logradouro'})
    complemento: string;
    
    @ManyToOne(() => User, user => user.address)
    @JoinColumn({ name: "id_usuario" })
    user: User;

}