import { Injectable, inject } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Store } from '@ngxs/store';
import { Observable, map } from 'rxjs';

import { IUsersHttpService } from './users-http.service.interface';
import { BaseHttpService } from '@shared/base/base-http.service';
import { RegisterDto } from '@shared/dtos/register.dto';
import { SelectedLocalizationState } from '@store/selected-localization';
import { RegisterResponseData } from '@shared/types/register-response-data';
import { registerResponseData } from '@shared/unknown-types-parsers/register-response-data';

@Injectable({
  providedIn: 'root',
})
export class UsersHttpService
  extends BaseHttpService
  implements IUsersHttpService
{
  private readonly _store = inject(Store);

  public register(registerDto: RegisterDto): Observable<RegisterResponseData> {
    const selectedLocalization = this._store.selectSnapshot(
      SelectedLocalizationState.stream
    );

    return this._httpClient
      .post<unknown>(`${this._apiUrl}/api/register`, registerDto.toMap(), {
        params: new HttpParams().append('lang', selectedLocalization.language),
      })
      .pipe(map((responseData) => registerResponseData.parse(responseData)));
  }
}
