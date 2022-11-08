import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/user/model/user";
import { UserService } from "src/user/service/user.service";
import { AddressController } from "./controller/address.controller";
import { Address } from "./model/address";
import { AddressService } from "./service/address.service";


@Module({
    imports: [TypeOrmModule.forFeature([Address, User])],
    controllers: [AddressController],
    providers: [AddressService, UserService],
    exports: []
  })
  export class AddressModule { }