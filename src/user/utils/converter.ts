import { UserDTO } from "../dto/users.dto";
import { User } from "../model/user";

export function convertUserDTOToUser(userDTO: UserDTO): User {
    return {
        id_usuario: userDTO.id_usuario,
        nome: userDTO.nome,
        sobrenome: userDTO.sobrenome,
        email: userDTO.email,
        telefone: userDTO.telefone,
        cpf: userDTO.cpf
    }
}

export function convertUserToUserDTO(user: User): UserDTO {
    return {
        id_usuario: user.id_usuario,
        nome: user.nome,
        sobrenome: user.sobrenome,
        email: user.email,
        telefone: user.telefone,
        cpf: user.cpf
    }
}

