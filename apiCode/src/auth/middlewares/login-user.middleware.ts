import { NextFunction, Request } from 'express';
import { LoginRequestBody } from '../models/LoginRequestBody';
import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';

@Injectable()
export class LoginUserMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const body = req.body;
    const loginRequestBody = new LoginRequestBody();

    loginRequestBody;
    if (loginRequestBody) {
      next();
    } else {
      throw new UnauthorizedException('Acesso não permitido');
    }
  }
}
