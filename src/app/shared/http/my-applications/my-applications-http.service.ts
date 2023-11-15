import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IMyApplicationsHttpService } from './my-applications-http.service.interface';
import { BaseHttpService } from '@shared/base/base-http.service';
import { MyApplicationsList } from '@shared/types/my-application';

@Injectable({
  providedIn: 'root',
})
export class MyApplicationsHttpService
  extends BaseHttpService
  implements IMyApplicationsHttpService
{
  public getAll(): Observable<MyApplicationsList> {
    return this._httpClient.get<MyApplicationsList>(
      `${this._apiUrl}/api/applications`
    );
  }
}
