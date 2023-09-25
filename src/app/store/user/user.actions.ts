import { LoginDto } from '@shared/dtos/login.dto';

export class LoginUser {
  public static type = '[User] Login';

  constructor(public readonly loginDto: LoginDto) {}
}

export class LogoutUser {
  public static type = '[User] Logout';
}
