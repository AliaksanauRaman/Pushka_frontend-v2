import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpStatusCode } from '@angular/common/http';

import {
  BaseUserActivationHttpError,
  TokenIsExpiredError,
  TokenIsNotFoundError,
  UnknownHttpError,
} from '../user-activation-http-error';

@Injectable({
  providedIn: 'root',
})
export class UserActivationHttpErrorFactory {
  public build(httpError: unknown): BaseUserActivationHttpError {
    if (!(httpError instanceof HttpErrorResponse)) {
      return new UnknownHttpError();
    }

    const { status } = httpError;

    if (status === HttpStatusCode.NotFound) {
      return new TokenIsNotFoundError();
    }

    if (status === HttpStatusCode.Unauthorized) {
      return new TokenIsExpiredError();
    }

    return new UnknownHttpError();
  }
}
