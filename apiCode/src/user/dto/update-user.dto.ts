import { PartialType } from '@nestjs/mapped-types';
import { CreatePeopleDto } from './create-people.dto';

export class UpdateUserDto extends PartialType(CreatePeopleDto) {}
