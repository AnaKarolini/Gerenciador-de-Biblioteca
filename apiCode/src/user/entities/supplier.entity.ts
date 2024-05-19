import { PeopleEntity } from './people.entity';
import { Column } from 'typeorm';

export class SupplierEntity extends PeopleEntity {
  @Column({ name: 'State_registration' })
  State_registration: string;
}
