import { IDto } from '@shared/interfaces/dto';

export class LoginDto implements IDto {
  constructor(
    public readonly email: string,
    public readonly password: string
  ) {}

  public toMap() {
    return {
      email: this.email,
      password: this.password,
    };
  }
}
