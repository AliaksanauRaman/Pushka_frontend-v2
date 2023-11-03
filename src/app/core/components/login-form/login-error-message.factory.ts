import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpStatusCode } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LoginErrorMessageFactory {
  public build(errorResponse: unknown): string {
    if (!(errorResponse instanceof HttpErrorResponse)) {
      return 'backendError.unknownLoginRequestError';
    }

    const { status } = errorResponse;

    switch (status) {
      case HttpStatusCode.Unauthorized:
        return 'backendError.invalidCredentials';
      // For the future. Currently does not work
      case HttpStatusCode.Forbidden:
        return 'backendError.accountIsNotActivated';
      default:
        return 'backendError.unknownLoginRequestError';
    }
  }
}
