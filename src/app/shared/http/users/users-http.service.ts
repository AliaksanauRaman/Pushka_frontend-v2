import { Injectable, inject } from '@angular/core';
import { HttpParams, HttpStatusCode } from '@angular/common/http';
import { Store } from '@ngxs/store';
import { Observable, map, throwError } from 'rxjs';

import { BaseHttpService } from '@shared/base/base-http.service';
import { RegisterDto } from '@shared/dtos/register.dto';
import { LocalizationsState } from '@store/localizations';

@Injectable({
  providedIn: 'root',
})
export class UsersHttpService extends BaseHttpService {
  private readonly _store = inject(Store);

  public register(registerDto: RegisterDto): Observable<unknown> {
    const selectedLocalization = this._store.selectSnapshot(
      LocalizationsState.selected
    );

    return this._httpClient
      .post<null>(`${this._apiUrl}/api/register`, registerDto.toMap(), {
        params: new HttpParams().append('lang', selectedLocalization.language),
        observe: 'response',
      })
      .pipe(
        map((httpResponse) => {
          const { status } = httpResponse;

          if (status === HttpStatusCode.Ok) {
            return httpResponse;
          }

          return throwError(
            () =>
              new Error(
                `Unknown user register error! Status code: '${status}'.`
              )
          );
        })
      );
  }
}
