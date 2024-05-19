import { IsString } from 'class-validator';
import { CreatePeopleDto } from './create-people.dto';

export class CreateSupplierDto extends CreatePeopleDto {
  @IsString()
  State_registration: string;
}
