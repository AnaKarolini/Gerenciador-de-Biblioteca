import { IsString } from 'class-validator';

export class CreateBookDto {
  @IsString()
  title: string;

  @IsString()
  author: string;

  @IsString()
  publishing: string;

  @IsString()
  year_of_publication: string;
}
