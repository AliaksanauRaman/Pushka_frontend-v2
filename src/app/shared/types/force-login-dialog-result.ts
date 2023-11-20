import { RegisterResponseData } from './register-response-data';

export type ForceLoginDialogResult =
  | SuccessLoginDialogResult
  | SuccessRegisterDialogResult
  | undefined;

export class SuccessLoginDialogResult {
  public readonly type = 'success-login' as const;
}

export class SuccessRegisterDialogResult {
  public readonly type = 'success-register' as const;

  constructor(public readonly data: RegisterResponseData) {}
}
