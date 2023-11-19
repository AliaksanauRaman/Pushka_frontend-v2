import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';

import { IMyApplicationsHttpService } from './my-applications-http.service.interface';
import { BaseHttpService } from '@shared/base/base-http.service';
import { PageableData } from '@shared/types/pageable-data';
import { MyApplication } from '@shared/types/my-application';
import { MyApplicationOptionType } from '@shared/enums/my-application-option-type.enum';
import { ApplicationStatus } from '@shared/enums/application-status.enum';
import { myApplicationsPageableData } from '@shared/unknown-types-parsers/my-applications-pageable-data';

@Injectable({
  providedIn: 'root',
})
export class MyApplicationsHttpService
  extends BaseHttpService
  implements IMyApplicationsHttpService
{
  public getAll(
    type: MyApplicationOptionType
  ): Observable<PageableData<MyApplication>> {
    return this._httpClient
      .get<unknown>(`${this._apiUrl}/api/applications`, {
        context: this.authorizedContext,
        params: new HttpParams()
          .append('status', ApplicationStatus.PUBLISHED)
          .append('type', type)
          .append('page', 0)
          .append('size', 100),
      })
      .pipe(
        map((responseData) => myApplicationsPageableData.parse(responseData))
      );
  }
}
