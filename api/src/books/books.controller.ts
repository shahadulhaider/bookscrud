import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dtos/create-book.dto';
import { UpdateBookDto } from './dtos/update-book.dto';

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}

  @Get()
  async getBooks() {
    return await this.booksService.findAll();
  }

  @Get('/:id')
  async getBookById(@Param('id') id: string) {
    return await this.booksService.findOne(id);
  }

  @Post()
  async createBook(@Body() data: CreateBookDto) {
    return await this.booksService.create(data);
  }

  @Put('/:id')
  async updateBook(@Param('id') id: string, @Body() data: UpdateBookDto) {
    return await this.booksService.update(id, data);
  }

  @Delete('/:id')
  async deleteBook(@Param('id') id: string) {
    return await this.booksService.remove(id);
  }
}
