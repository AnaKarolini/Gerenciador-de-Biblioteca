import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Put,
  Post,
  Patch,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
import { UserEntity } from './entities/user.entity';
import { IsPublic } from 'src/auth/decorators/is-public.decorator';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @IsPublic()
  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<UserEntity> {
    return this.userService.create(createUserDto);
  }

  //@IsPublic()
  @Get('all')
  async findAll(): Promise<UserEntity[]> {
    return this.userService.findAll();
  }

  @Get('student')
  async findAllStudents(): Promise<UserEntity[]> {
    return this.userService.findAllStudents();
  }

  @Get('teacher')
  async findAllTeacher(): Promise<UserEntity[]> {
    return this.userService.findAllTeacher();
  }

  @Get('supplier')
  async findAllSupplier(): Promise<UserEntity[]> {
    return this.userService.findAllSupplier();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<any> {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
