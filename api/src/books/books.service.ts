import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './book.entity';
import { CreateBookDto } from './dtos/create-book.dto';
import { UpdateBookDto } from './dtos/update-book.dto';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book) private booksRepository: Repository<Book>,
  ) {}

  async findAll(): Promise<Book[]> {
    try {
      const books = await this.booksRepository.find();
      return books;
    } catch (err) {
      throw err;
    }
  }

  async findOne(id: string): Promise<Book> {
    try {
      const book = await this.booksRepository.findOne({ where: { id } });

      if (!book) {
        throw new NotFoundException();
      }

      return book;
    } catch (err) {
      throw err;
    }
  }

  async create(data: CreateBookDto): Promise<Book> {
    try {
      const book = this.booksRepository.create(data);

      return await this.booksRepository.save(book);
    } catch (err) {
      throw err;
    }
  }

  async update(id: string, data: UpdateBookDto): Promise<boolean> {
    try {
      const book = await this.booksRepository.findOne({ where: { id } });

      if (!book) {
        throw new NotFoundException();
      }

      const { affected } = await this.booksRepository.update(id, data);

      return affected === 0 ? false : true;
    } catch (err) {
      throw err;
    }
  }

  async remove(id: string): Promise<boolean> {
    try {
      const book = await this.booksRepository.findOne({ where: { id } });

      if (!book) {
        throw new NotFoundException();
      }

      const { affected } = await this.booksRepository.delete(id);

      return affected === 0 ? false : true;
    } catch (err) {
      throw err;
    }
  }
}
