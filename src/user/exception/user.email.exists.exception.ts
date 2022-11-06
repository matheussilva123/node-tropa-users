import { HttpException, HttpStatus } from "@nestjs/common";

export class UserEmailExistsException extends HttpException {
    constructor(){
        super('This user cannot be created as the email already exists.', HttpStatus.BAD_REQUEST)
    }
}