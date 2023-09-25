import { User } from '@shared/types/user';
import { LoginDto } from '@shared/dtos/login.dto';

export class InitUser {
  public static type = '[User] Init';

  constructor(public readonly user: User | null) {}
}

export class LoginUser {
  public static type = '[User] Login';

  constructor(public readonly loginDto: LoginDto) {}
}

export class LogoutUser {
  public static type = '[User] Logout';
}
