import { Injectable } from '@nestjs/common';
import { IsPublic } from './auth/decorators/is-public.decorator';

@Injectable()
export class AppService {
  @IsPublic()
  getWellcome(): string {
    return 'Bem vindo ao Gerenciador de Biblioteca acesse <a href="http://localhost:4001/api">http://localhost:4001/api</a>';
  }
}
