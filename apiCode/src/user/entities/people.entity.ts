import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'user' })
@Unique(['email', 'document'])
export class PeopleEntity {
  @PrimaryGeneratedColumn('rowid')
  id: number;

  @Column({ name: 'name', nullable: false })
  name: string;

  @Column({ name: 'email', nullable: false })
  email: string;

  @Column({ name: 'phone' })
  phone: string;

  @Column({ name: 'cell_phone' })
  cell_phone: string;

  @Column({ name: 'academic_educationhone' })
  academic_educationhone: string;

  @Column({ name: 'document', nullable: false })
  document: string;

  @Column({ name: 'address_street', nullable: false })
  address_street: string;

  @Column({ name: 'address_number', nullable: false })
  address_number: string;

  @Column({ name: 'address_complement', nullable: false })
  address_complement: string;

  @Column({ name: 'address_district', nullable: false })
  address_district: string;

  @Column({ name: 'state', nullable: false })
  state: string;

  @Column({ name: 'city', nullable: false })
  city: string;

  @Column({ name: 'cep', nullable: false })
  cep: string;

  @Column({ name: 'password', nullable: false })
  password: string;

  @Column({ name: 'type_user', nullable: false })
  type_user: string;

  @CreateDateColumn({
    name: 'created_at',
  })
  created_at: Date;

  @UpdateDateColumn({
    name: 'updated_at',
  })
  updated_at: Date;
}
