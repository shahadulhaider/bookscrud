import { IsString, IsNotEmpty, IsEmail, IsEnum } from 'class-validator';
import { Status } from '../book.entity';

export class CreateBookDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  author: string;

  @IsEnum(Status)
  @IsNotEmpty()
  status: Status;
}
