import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'book-render' })
export class BookRendelEntity {
  @PrimaryGeneratedColumn('rowid')
  id: number;

  @Column({ name: 'book', nullable: false })
  book: string;

  @Column({ name: 'people', nullable: false })
  people: string;

  @Column({ name: 'lon_data', nullable: false })
  lon_data: string;

  @Column({ name: 'return_date', nullable: false })
  return_date: string;

  @CreateDateColumn({
    name: 'created_at',
  })
  created_at: Date;

  @UpdateDateColumn({
    name: 'updated_at',
  })
  updated_at: Date;
}
