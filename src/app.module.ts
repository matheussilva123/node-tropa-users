import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/model/user';
import { UsersModule } from './user/users.module';

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'admin',
      password: 'admin',
      database: 'node-tropa-users-database',
      entities: [User],
      synchronize: true,
    }),
  ],
})
export class AppModule {}
