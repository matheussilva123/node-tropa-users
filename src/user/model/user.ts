import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "usuarios"})
export class User {

    @PrimaryGeneratedColumn()
    id_usuario: number;

    @Column()
    nome: string;

    @Column()
    sobrenome: string;

    @Column()
    email: string;

    @Column()
    telefone: string;

    @Column()
    cpf: string;
}