import { inject } from '@angular/core';
import {
  HttpInterceptorFn,
  HttpRequest,
  HttpHandlerFn,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { LOCAL_STORAGE } from '@global/local-storage';

import { IS_AUTHORIZED } from '@shared/contexts/is-authorized';
import { LocalStorageKey } from '@shared/enums/local-storage-key.enum';

export const authorizationInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> => {
  const isAuthorized = req.context.get(IS_AUTHORIZED);

  if (!isAuthorized) {
    return next(req);
  }

  const localStorage = inject(LOCAL_STORAGE);
  const token = localStorage.getItem(LocalStorageKey.TOKEN);

  if (token === null) {
    return next(req);
  }

  return next(
    req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    })
  );
};
