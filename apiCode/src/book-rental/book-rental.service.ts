import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BookRendelEntity } from './entities/book-rendel.entity';
import { Repository } from 'typeorm';
import { CreateBookRendelDto } from './dto/create-book-rendel.dto';

@Injectable()
export class BookRentalService {
  constructor(
    @InjectRepository(BookRendelEntity)
    private readonly bookRepository: Repository<BookRendelEntity>,
  ) {}

  async create(
    createBookRendelDto: CreateBookRendelDto,
  ): Promise<BookRendelEntity> {
    const createdUser = await this.bookRepository.save({
      ...createBookRendelDto,
    });
    return createdUser;
  }
}
