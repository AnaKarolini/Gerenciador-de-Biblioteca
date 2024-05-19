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
import { UserService } from './user.service';
import { IsPublic } from 'src/auth/decorators/is-public.decorator';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreatePeopleDto } from './dto/create-people.dto';
import { CreateStudentDto } from './dto/create-student.dto';
import { CreateTeacherDto } from './dto/create.teacher.dto';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { StudentEntity } from './entities/student.entity';
import { TeacherEntity } from './entities/teacher.entity';
import { SupplierEntity } from './entities/supplier.entity';

@Controller('user/create')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @IsPublic()
  @Post('student')
  async createStudent(
    @Body() createStudentDto: CreateStudentDto,
  ): Promise<StudentEntity> {
    return this.userService.createStudent(createStudentDto);
  }

  @IsPublic()
  @Post('teacher')
  async createTeacher(
    @Body() createTeacherDto: CreateTeacherDto,
  ): Promise<TeacherEntity> {
    return this.userService.createTeacher(createTeacherDto);
  }

  //@IsPublic()
  @IsPublic()
  @Post('suplier')
  async createSupplier(
    @Body() createSupplierDto: CreateSupplierDto,
  ): Promise<SupplierEntity> {
    return this.userService.createSupplier(createSupplierDto);
  }

  /*
  @Get('representatives')
  async findAllRepresentatives(): Promise<PeopleEntity[]> {
    return this.userService.findAllRepresentatives();
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

  @Post('store/:id')
  async addStoreToUser(@Param('id') userId: number, @Body() addStoreDto: any) {
    return this.userService.addStoreToUser(userId, addStoreDto);
  }
  */
}
