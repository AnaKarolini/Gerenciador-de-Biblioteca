import { PartialType } from '@nestjs/mapped-types';
import { CreateBookRendelDto } from './create-book-rendel.dto';

export class UpdateBookRendelDto extends PartialType(CreateBookRendelDto) {}
