import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/user/model/user";
import { Address } from "./model/address";


@Module({
    imports: [TypeOrmModule.forFeature([Address, User])],
    controllers: [],
    providers: [],
    exports: []
  })
  export class AddressModule { }