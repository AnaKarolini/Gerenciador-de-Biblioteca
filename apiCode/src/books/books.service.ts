import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BookEntity } from './entities/book.entity';
import { Repository } from 'typeorm';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(BookEntity)
    private readonly bookRepository: Repository<BookEntity>,
  ) {}

  async create(createBookDto: CreateBookDto): Promise<BookEntity> {
    const createdUser = await this.bookRepository.save({
      ...createBookDto,
    });
    return createdUser;
  }

  async findAll(): Promise<BookEntity[]> {
    return this.bookRepository.find();
  }

  async findOne(id: number) {
    const user = await this.bookRepository.find({
      where: { id },
    });

    return user;
  }

  async update(id: number, updateBookDto: UpdateBookDto) {
    const hasUser = await this.bookRepository.find({
      where: { id },
    });
    if (!hasUser) throw new Error('Book does not exist');
    await this.bookRepository.save(updateBookDto);
  }

  async remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
