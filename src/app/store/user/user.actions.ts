export class LoginUser {
  public static type = '[User] Login';

  constructor(public readonly token: string) {}
}

export class LogoutUser {
  public static type = '[User] Logout';
}
