import { PeopleEntity } from 'src/user/entities/people.entity';
import { AuthRequest } from '../models/AuthRequest';
import { ExecutionContext, createParamDecorator } from '@nestjs/common';

export const CurrentUser = createParamDecorator(
  (data: unknown, context: ExecutionContext): PeopleEntity => {
    const request = context.switchToHttp().getRequest<AuthRequest>();

    return request.user;
  },
);
