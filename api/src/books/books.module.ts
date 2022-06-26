import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './book.entity';
import { BooksController } from './books.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Book])],
  controllers: [BooksController],
  providers: [BooksService],
})
export class BooksModule {}
