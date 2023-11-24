import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { catchError, map, of, tap } from 'rxjs';

import { ActivateUserHttpService } from '@shared/http/activate-user/activate-user-http.service';
import { SnackBarService } from '@shared/services/snack-bar/snack-bar.service';

export const activateUserGuard: CanActivateFn = (route, _state) => {
  const router = inject(Router);
  const token = route.queryParamMap.get('token');

  if (token === null) {
    return of(false).pipe(tap(() => navigateToMainPage(router)));
  }

  const formattedToken = token.trim();

  if (formattedToken === '') {
    return of(false).pipe(tap(() => navigateToMainPage(router)));
  }

  const activateUserHttpService = inject(ActivateUserHttpService);
  const snackBarService = inject(SnackBarService);

  return activateUserHttpService.activateUser(formattedToken).pipe(
    map(() => {
      snackBarService.showSuccessMessage(
        'activateUser.successActivationMessage'
      );
      return false;
    }),
    catchError((error: unknown) => {
      console.error(error);

      if (error instanceof HttpErrorResponse) {
        switch (error.status) {
          case HttpStatusCode.NotFound:
            snackBarService.showErrorMessage(
              'activateUser.notFoundErrorMessage'
            );
            break;
          case HttpStatusCode.Unauthorized:
            snackBarService.showErrorMessage(
              'activateUser.unauthorizedErrorMessage'
            );
            break;
          default:
            snackBarService.showErrorMessage(
              'activateUser.unknownErrorMessage'
            );
            break;
        }
      } else {
        snackBarService.showErrorMessage('activateUser.unknownErrorMessage');
      }

      return of(false);
    }),
    tap(() => navigateToMainPage(router))
  );
};

function navigateToMainPage(router: Router): Promise<boolean> {
  return router.navigateByUrl('/find-application/requests');
}
