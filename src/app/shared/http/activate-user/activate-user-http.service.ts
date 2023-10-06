import { Injectable } from '@angular/core';
import { HttpParams, HttpStatusCode } from '@angular/common/http';
import { Observable, map, throwError } from 'rxjs';

import { BaseHttpService } from '@shared/base/base-http.service';

@Injectable({
  providedIn: 'root',
})
export class ActivateUserHttpService extends BaseHttpService {
  public activateUser(token: string): Observable<unknown> {
    return this._httpClient
      .post<null>(
        `${this._apiUrl}/api/registration/confirm`,
        {},
        {
          params: new HttpParams().set('token', token),
          observe: 'response',
        }
      )
      .pipe(
        map((httpResponse) => {
          const { status } = httpResponse;

          if (status === HttpStatusCode.Ok) {
            return httpResponse;
          }

          return throwError(
            () =>
              new Error(
                `Unknown user activation error! Status code: '${status}'.`
              )
          );
        })
      );
  }
}
