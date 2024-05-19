/* eslint-disable prettier/prettier */
import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PeopleEntity } from './entities/people.entity';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateStudentDto } from './dto/create-student.dto';
import { CreateTeacherDto } from './dto/create.teacher.dto';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { StudentEntity } from './entities/student.entity';
import { TeacherEntity } from './entities/teacher.entity';
import { SupplierEntity } from './entities/supplier.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(PeopleEntity)
    private readonly studentRepository: Repository<StudentEntity>,
    @InjectRepository(TeacherEntity)
    private readonly teacherEntityRepository: Repository<TeacherEntity>,
    @InjectRepository(SupplierEntity)
    private readonly supplierEntity: Repository<SupplierEntity>,
  ) {}

  async createStudent(
    createStudentDto: CreateStudentDto,
  ): Promise<StudentEntity> {
    const emailExist = await this.studentRepository.findOne({
      where: { email: createStudentDto.email },
    });

    const documentExist = await this.studentRepository.findOne({
      where: { document: createStudentDto.document },
    });

    if (!emailExist && !documentExist) {
      const createdUser = await this.studentRepository.save({
        ...createStudentDto,
        password: await bcrypt.hash(createStudentDto.password, 10),
      });

      return createdUser;
    }
    if (documentExist)
      throw new ConflictException('Este documento já está em uso.');

    if (emailExist)
      throw new ConflictException('Este endereço de e-mail já está em uso.');
  }

  async createTeacher(
    createTeacherDto: CreateTeacherDto,
  ): Promise<TeacherEntity> {
    const emailExist = await this.teacherEntityRepository.findOne({
      where: { email: createTeacherDto.email },
    });

    const documentExist = await this.teacherEntityRepository.findOne({
      where: { document: createTeacherDto.document },
    });

    if (!emailExist && !documentExist) {
      const createdUser = await this.teacherEntityRepository.save({
        ...createTeacherDto,
        password: await bcrypt.hash(createTeacherDto.password, 10),
      });

      return createdUser;
    }
    if (documentExist)
      throw new ConflictException('Este documento já está em uso.');

    if (emailExist)
      throw new ConflictException('Este endereço de e-mail já está em uso.');
  }

  async createSupplier(
    createSupplierDto: CreateSupplierDto,
  ): Promise<SupplierEntity> {
    const emailExist = await this.supplierEntity.findOne({
      where: { email: createSupplierDto.email },
    });

    const documentExist = await this.supplierEntity.findOne({
      where: { document: createSupplierDto.document },
    });

    if (!emailExist && !documentExist) {
      const createdUser = await this.supplierEntity.save({
        ...createSupplierDto,
        password: await bcrypt.hash(createSupplierDto.password, 10),
      });

      return createdUser;
    }
    if (documentExist)
      throw new ConflictException('Este documento já está em uso.');

    if (emailExist)
      throw new ConflictException('Este endereço de e-mail já está em uso.');
  }
}
