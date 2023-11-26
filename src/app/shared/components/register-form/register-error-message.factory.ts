import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { errorWithCode } from '@shared/unknown-types-parsers/error-with-code';

enum RegisterErrorCode {
  ACCOUNT_IS_BLOCKED = 12,
  ACCOUNT_ALREADY_EXISTS = 13,
  FINISH_REGISTRATION_VIA_EMAIL = 14,
}

@Injectable({
  providedIn: 'root',
})
export class RegisterErrorMessageFactory {
  public build(errorResponse: unknown): string {
    if (!(errorResponse instanceof HttpErrorResponse)) {
      return 'backendError.unknownRegisterError';
    }

    const { code } = errorWithCode.parse(errorResponse.error);

    switch (code) {
      case RegisterErrorCode.ACCOUNT_IS_BLOCKED:
        return 'backendError.accountIsBlocked';
      case RegisterErrorCode.ACCOUNT_ALREADY_EXISTS:
        return 'backendError.accountAlreadyExists';
      case RegisterErrorCode.FINISH_REGISTRATION_VIA_EMAIL:
        return 'backendError.registrationViaEmailIsUnfinished';
      default:
        return 'backendError.unknownRegisterError';
    }
  }
}
