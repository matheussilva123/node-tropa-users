import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Address } from "src/address/model/address";
import { UserController } from "./controller/user.controller";
import { User } from "./model/user";
import { UserService } from "./service/user.service";

@Module({
    imports: [TypeOrmModule.forFeature([User, Address])],
    controllers: [UserController],
    providers: [UserService],
    exports: []
  })
  export class UsersModule { }