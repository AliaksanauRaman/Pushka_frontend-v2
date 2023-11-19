import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';

import { IHelpRequestsHttpService } from './help-requests-http.interface';
import { FilterByPlaceValue } from '@shared/types/filter-by-place-value';
import { BaseHttpService } from '@shared/base/base-http.service';
import { PageableData } from '@shared/types/pageable-data';
import { HelpRequest } from '@shared/types/help-request';
import { PageableResponse } from '@shared/types/pageable-response';
import { ApplicationStatus } from '@shared/enums/application-status.enum';
import { CreateHelpRequestDto } from '@shared/dtos/create-help-request.dto';
import { mapToPageableData } from '@shared/utils/map-to-pageable-data';

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
      .get<PageableResponse<HelpRequest>>(`${this._helpRequestsEndpoint}`, {
        params: httpParams,
      })
      .pipe(map(mapToPageableData));
  }

  public createOne(
    createHelpRequestDto: CreateHelpRequestDto
  ): Observable<unknown> {
    return this._httpClient.post<unknown>(
      this._helpRequestsEndpoint,
      createHelpRequestDto.toMap(),
      { context: this.authorizedContext }
    );
  }

  public deleteOne(helpRequestId: number): Observable<unknown> {
    return this._httpClient.patch<null>(
      `${this._helpRequestsEndpoint}/${helpRequestId}`,
      { status: 'DELETED' }, // TODO: Type
      { context: this.authorizedContext, observe: 'response' }
    );
  }
}
