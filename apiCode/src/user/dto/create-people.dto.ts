import {
  IsDate,
  IsEmail,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreatePeopleDto {
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password too weak',
  })
  password: string;

  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsDate()
  birthday: Date;

  @IsString()
  cell_phone: string;

  @IsString()
  phone: string;

  @IsString()
  document: string;

  @IsString()
  cep: string;

  @IsString()
  address_street: string;

  @IsString()
  address_number: string;

  @IsString()
  address_complement: string;

  @IsString()
  address_district: string;

  @IsString()
  state: string;

  @IsString()
  city: string;
}
