import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserEntity } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<UserEntity> {
    const { email, document, type_user } = createUserDto;

    // Verifica se o type_user é válido
    const validTypes = ['aluno', 'professor', 'fornecedor'];
    if (!validTypes.includes(type_user)) {
      throw new BadRequestException(
        `Tipo de usuário inválido: ${type_user}, tipos permitidos: aluno, professor ou fornecedor`,
      );
    }

    const emailExist = await this.userRepository.findOne({ where: { email } });
    const documentExist = await this.userRepository.findOne({
      where: { document },
    });

    if (!emailExist && !documentExist) {
      const createdUser = await this.userRepository.save({
        ...createUserDto,
        password: await bcrypt.hash(createUserDto.password, 10),
      });

      return createdUser;
    }
    if (documentExist) {
      throw new ConflictException('Este documento já está em uso.');
    }

    if (emailExist) {
      throw new ConflictException('Este endereço de e-mail já está em uso.');
    }
  }

  async findAll(): Promise<UserEntity[]> {
    return this.userRepository.find();
  }

  async findAllStudents(): Promise<UserEntity[]> {
    const representatives = await this.userRepository.find({
      where: { type_user: 'aluno' },
    });
    return representatives;
  }

  async findAllTeacher(): Promise<UserEntity[]> {
    const representatives = await this.userRepository.find({
      where: { type_user: 'professor' },
    });
    return representatives;
  }

  async findAllSupplier(): Promise<UserEntity[]> {
    const representatives = await this.userRepository.find({
      where: { type_user: 'fornecedor' },
    });
    return representatives;
  }

  async findOne(id: number) {
    const user = await this.userRepository.find({
      where: { id },
    });

    return {
      ...user,
      password: undefined,
    };
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const hasUser = await this.userRepository.find({
      where: { id },
    });
    if (!hasUser) throw new Error('User does not exist');
    await this.userRepository.save(updateUserDto);
  }

  async remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
