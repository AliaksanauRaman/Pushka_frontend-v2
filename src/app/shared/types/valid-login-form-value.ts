import { LoginDto } from '@shared/dtos/login.dto';

type RawLoginFormValue = Readonly<{
  email: string;
  password: string;
}>;

export class ValidLoginFormValue {
  public readonly email: string;
  public readonly password: string;

  constructor({ email, password }: RawLoginFormValue) {
    this.email = email;
    this.password = password;
  }

  public toLoginDto(): LoginDto {
    return new LoginDto(this.email, this.password);
  }
}
