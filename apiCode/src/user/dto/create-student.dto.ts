import { IsString } from 'class-validator';
import { CreatePeopleDto } from './create-people.dto';

export class CreateStudentDto extends CreatePeopleDto {
  @IsString()
  registration_number: string;

  @IsString()
  enrollment_subjects: string;
}
