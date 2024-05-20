import { IsString } from 'class-validator';

export class CreateBookRendelDto {
  @IsString()
  book: string;

  @IsString()
  people: string;

  @IsString()
  lon_data: string;

  @IsString()
  return_date: string;
}
