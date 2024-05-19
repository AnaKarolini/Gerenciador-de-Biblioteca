import { PeopleEntity } from './people.entity';
import { Column } from 'typeorm';

export class TeacherEntity extends PeopleEntity {
  @Column({ name: 'academic_education' })
  academic_education: string;

  @Column({ name: 'subjects_taught' })
  subjects_taught: string;
}
