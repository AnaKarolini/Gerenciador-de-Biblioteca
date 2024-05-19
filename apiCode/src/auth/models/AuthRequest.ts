import { Request } from 'express';
import { PeopleEntity } from 'src/user/entities/people.entity';

export interface AuthRequest extends Request {
  user: PeopleEntity;
}
