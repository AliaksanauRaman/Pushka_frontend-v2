import { RegisterDto } from '@shared/dtos/register.dto';

type RawRegisterFormValue = Readonly<{
  fullName: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}>;

export class ValidRegisterFormValue {
  public readonly fullName: string;
  public readonly email: string;
  public readonly password: string;
  public readonly passwordConfirmation: string;

  constructor({
    fullName,
    email,
    password,
    passwordConfirmation,
  }: RawRegisterFormValue) {
    this.fullName = fullName;
    this.email = email;
    this.password = password;
    this.passwordConfirmation = passwordConfirmation;
  }

  public toRegisterDto(): RegisterDto {
    return new RegisterDto(this.fullName, this.email, this.password);
  }
}
