import { RegisterDto } from '@shared/dtos/register.dto';

type RawRegisterFormValue = Readonly<{
  fullName: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  personalDataStorageAndProcessingAgreementConfirmation: boolean;
}>;

export class ValidRegisterFormValue {
  public readonly fullName: string;
  public readonly email: string;
  public readonly password: string;
  public readonly passwordConfirmation: string;
  public readonly personalDataStorageAndProcessingAgreementConfirmation: boolean;

  constructor({
    fullName,
    email,
    password,
    passwordConfirmation,
    personalDataStorageAndProcessingAgreementConfirmation,
  }: RawRegisterFormValue) {
    this.fullName = fullName;
    this.email = email;
    this.password = password;
    this.passwordConfirmation = passwordConfirmation;
    this.personalDataStorageAndProcessingAgreementConfirmation =
      personalDataStorageAndProcessingAgreementConfirmation;
  }

  public toRegisterDto(): RegisterDto {
    return new RegisterDto(this.fullName, this.email, this.password);
  }
}
