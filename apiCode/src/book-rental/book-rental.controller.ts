import { Body, Controller, Post } from '@nestjs/common';
import { BookRentalService } from './book-rental.service';
import { IsPublic } from 'src/auth/decorators/is-public.decorator';
import { CreateBookRendelDto } from './dto/create-book-rendel.dto';
import { BookRendelEntity } from './entities/book-rendel.entity';

@Controller('book-rental')
export class BookRentalController {
  constructor(private readonly bookRentalService: BookRentalService) {}

  @IsPublic()
  @Post()
  async create(
    @Body() createBookRendelDto: CreateBookRendelDto,
  ): Promise<BookRendelEntity> {
    return this.bookRentalService.create(createBookRendelDto);
  }
}
