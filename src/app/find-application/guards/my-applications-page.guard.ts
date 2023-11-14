import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Store } from '@ngxs/store';

import { UserState } from '@store/user';

export const myApplicationsPageGuard: CanActivateFn = async (
  _route: ActivatedRouteSnapshot,
  _state: RouterStateSnapshot
): Promise<boolean> => {
  if (inject(Store).selectSnapshot(UserState.stream) !== null) {
    return true;
  }

  return inject(Router)
    .navigateByUrl('/not-found')
    .then(() => false);
};
