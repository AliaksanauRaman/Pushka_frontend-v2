import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { BaseHttpService } from '@shared/base/base-http.service';

@Injectable({
  providedIn: 'root',
})
export class ActivateUserHttpService extends BaseHttpService {
  public activateUser(token: string): Observable<unknown> {
    return this._httpClient.post<null>(
      `${this._apiUrl}/api/registration/confirm`,
      {},
      {
        params: new HttpParams().set('token', token),
        observe: 'response',
      }
    );
  }
}
