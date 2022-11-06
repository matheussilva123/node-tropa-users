import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressModule } from './address/address.module';
import { Address } from './address/model/address';
import { User } from './user/model/user';
import { UsersModule } from './user/users.module';

@Module({
  imports: [
    UsersModule,
    AddressModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'admin',
      password: 'admin',
      database: 'node-tropa-users-database',
      entities: [User, Address],
      synchronize: false,
    }),
  ],
})
export class AppModule {}
