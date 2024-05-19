export interface UserPayload {
  sub: number;
  email: string;
  name: string;
  type_user: string;
  iat?: number;
  exp?: number;
}
