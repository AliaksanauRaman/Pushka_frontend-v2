import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { Observable, map, catchError, of } from 'rxjs';

import { UserActivationHttpErrorFactory } from '../factories/user-activation-http-error.factory';
import { ActivateUserHttpService } from '@shared/http/activate-user/activate-user-http.service';

import {
  BaseUserActivation,
  SuccessfulUserActivation,
  FailedUserActivation,
} from '../user-activation';
import {
  BaseUserActivationError,
  InvalidLinkError,
  UnknownError,
} from '../user-activation-error';

export const userActivationResolver: ResolveFn<BaseUserActivation> = (
  route: ActivatedRouteSnapshot
): Observable<BaseUserActivation> => {
  try {
    const token = route.queryParamMap.get('token');

    if (token === null) {
      throw new InvalidLinkError('Token is missing!');
    }

    const pureToken = token.trim();

    if (pureToken === '') {
      throw new InvalidLinkError('Token is empty!');
    }

    const httpErrorFactory = inject(UserActivationHttpErrorFactory);

    return inject(ActivateUserHttpService)
      .activateUser(pureToken)
      .pipe(
        map(() => new SuccessfulUserActivation()),
        catchError((httpError: unknown) => {
          return of(
            new FailedUserActivation(httpErrorFactory.build(httpError))
          );
        })
      );
  } catch (error: unknown) {
    return of(
      new FailedUserActivation(
        error instanceof BaseUserActivationError ? error : new UnknownError()
      )
    );
  }
};
