import { Module } from '@nestjs/common';
import { BookRentalService } from './book-rental.service';
import { BookRentalController } from './book-rental.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookRendelEntity } from './entities/book-rendel.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BookRendelEntity])],
  controllers: [BookRentalController],
  providers: [BookRentalService],
  exports: [BookRentalService],
})
export class BookRentalModule {}
