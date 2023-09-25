import { IDto } from '@shared/interfaces/dto';

export class RegisterDto implements IDto {
  constructor(
    public readonly fullName: string,
    public readonly email: string,
    public readonly password: string
  ) {}

  public toMap() {
    return {
      fullName: this.fullName,
      email: this.email,
      password: this.password,
    };
  }
}
