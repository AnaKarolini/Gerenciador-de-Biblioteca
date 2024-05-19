import { PeopleEntity } from './people.entity';
import { Column } from 'typeorm';

export class StudentEntity extends PeopleEntity {
  @Column({ name: 'registration_number' })
  registration_number: string;

  @Column({ name: 'enrollment_subjects' })
  enrollment_subjects: string;
}
