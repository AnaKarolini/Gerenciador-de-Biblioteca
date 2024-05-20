import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'book' })
export class BookEntity {
  @PrimaryGeneratedColumn('rowid')
  id: number;

  @Column({ name: 'title', nullable: false })
  title: string;

  @Column({ name: 'author', nullable: false })
  author: string;

  @Column({ name: 'publishing', nullable: false })
  publishing: string;

  @Column({ name: 'year_of_publication', nullable: false })
  year_of_publication: string;

  @CreateDateColumn({
    name: 'created_at',
  })
  created_at: Date;

  @UpdateDateColumn({
    name: 'updated_at',
  })
  updated_at: Date;
}
