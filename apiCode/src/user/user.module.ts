import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PeopleEntity } from './entities/people.entity';
import { StudentEntity } from './entities/student.entity';
import { TeacherEntity } from './entities/teacher.entity';
import { SupplierEntity } from './entities/supplier.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      PeopleEntity,
      StudentEntity,
      TeacherEntity,
      SupplierEntity,
    ]),
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
