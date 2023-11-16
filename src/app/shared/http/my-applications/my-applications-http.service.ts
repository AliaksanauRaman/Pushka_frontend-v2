import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IMyApplicationsHttpService } from './my-applications-http.service.interface';
import { BaseHttpService } from '@shared/base/base-http.service';
import { MyApplicationsList } from '@shared/types/my-application';

import { MyApplicationOptionType } from '@shared/enums/my-application-option-type.enum';

@Injectable({
  providedIn: 'root',
})
export class MyApplicationsHttpService
  extends BaseHttpService
  implements IMyApplicationsHttpService
{
  public getAll(type: MyApplicationOptionType): Observable<MyApplicationsList> {
    return this._httpClient.get<MyApplicationsList>(
      `${this._apiUrl}/api/applications`,
      {
        params: new HttpParams()
          .append('type', type)
          .append('page', 0)
          .append('size', 10),
      }
    );
  }
}
