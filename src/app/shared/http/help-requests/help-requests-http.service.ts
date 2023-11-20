import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';

import { IHelpRequestsHttpService } from './help-requests-http.interface';
import { FilterByPlaceValue } from '@shared/types/filter-by-place-value';
import { BaseHttpService } from '@shared/base/base-http.service';
import { PageableData } from '@shared/types/pageable-data';
import { HelpRequest } from '@shared/types/help-request';
import { ApplicationStatus } from '@shared/enums/application-status.enum';
import { AuthorizedCreateHelpRequestDto } from '@shared/dtos/authorized-create-help-request.dto';
import { UnauthorizedCreateHelpRequestDto } from '@shared/dtos/unauthorized-create-help-request.dto';
import { helpRequestsPageableData } from '@shared/unknown-types-parsers/help-requests-pageable-data';
import { DeleteApplicationDto } from '@shared/dtos/delete-application.dto';

@Injectable({
  providedIn: 'root',
})
export class HelpRequestsHttpService
  extends BaseHttpService
  implements IHelpRequestsHttpService
{
  private readonly _helpRequestsEndpoint = `${this._apiUrl}/api/help-requests`;

  public getPublished(
    filterValue: FilterByPlaceValue
  ): Observable<PageableData<HelpRequest>> {
    const cityFromId = filterValue.departurePlace?.cityId;
    const cityToId = filterValue.destination?.cityId;

    let httpParams = new HttpParams();
    httpParams = httpParams.append('statuses', ApplicationStatus.PUBLISHED);
    httpParams = httpParams.append('page', 0);
    httpParams = httpParams.append('size', 100);

    if (cityFromId) {
      httpParams = httpParams.append('cityFromId', cityFromId);
    }

    if (cityToId) {
      httpParams = httpParams.append('cityToId', cityToId);
    }

    return this._httpClient
      .get<unknown>(`${this._helpRequestsEndpoint}`, {
        params: httpParams,
      })
      .pipe(
        map((responseData) => helpRequestsPageableData.parse(responseData))
      );
  }

  public authorizedCreateOne(
    dto: AuthorizedCreateHelpRequestDto
  ): Observable<unknown> {
    return this._httpClient.post<unknown>(
      this._helpRequestsEndpoint,
      dto.toMap(),
      { context: this.authorizedContext }
    );
  }

  public unauthorizedCreateOne(
    dto: UnauthorizedCreateHelpRequestDto
  ): Observable<unknown> {
    return this._httpClient.post<unknown>(
      this._helpRequestsEndpoint,
      dto.toMap()
    );
  }

  public deleteOne(helpRequestId: number): Observable<unknown> {
    return this._httpClient.patch<null>(
      `${this._helpRequestsEndpoint}/${helpRequestId}`,
      new DeleteApplicationDto().toMap(),
      { context: this.authorizedContext, observe: 'response' }
    );
  }
}
