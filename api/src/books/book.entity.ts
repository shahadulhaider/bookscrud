import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum Status {
  available = 'available',
  borrowed = 'borrowed',
}

@Entity()
export class Book {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  author: string;

  @Column()
  status: Status;
}
