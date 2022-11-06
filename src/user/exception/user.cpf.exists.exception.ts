import { HttpException, HttpStatus } from "@nestjs/common";

export class UserCpfExistsException extends HttpException {
    constructor(){
        super('This user cannot be created as the cpf already exists.', HttpStatus.BAD_REQUEST)
    }
}