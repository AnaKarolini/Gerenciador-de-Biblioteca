import { IsString } from 'class-validator';
import { CreatePeopleDto } from './create-people.dto';

export class CreateTeacherDto extends CreatePeopleDto {
  @IsString()
  academic_education: string;

  @IsString()
  subjects_taught: string;
}
