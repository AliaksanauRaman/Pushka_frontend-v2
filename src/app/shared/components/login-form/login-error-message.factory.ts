import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { errorWithCode } from '@shared/unknown-types-parsers/error-with-code';

enum LoginErrorCode {
  ACCOUNT_IS_NOT_ACTIVATED = 10,
  INVALID_CREDENTIALS = 11,
}

@Injectable({
  providedIn: 'root',
})
export class LoginErrorMessageFactory {
  public build(errorResponse: unknown): string {
    if (!(errorResponse instanceof HttpErrorResponse)) {
      return 'backendError.unknownLoginError';
    }

    const { code } = errorWithCode.parse(errorResponse.error);

    switch (code) {
      case LoginErrorCode.INVALID_CREDENTIALS:
        return 'backendError.invalidCredentials';
      case LoginErrorCode.ACCOUNT_IS_NOT_ACTIVATED:
        return 'backendError.accountIsNotActivated';
      default:
        return 'backendError.unknownLoginError';
    }
  }
}
