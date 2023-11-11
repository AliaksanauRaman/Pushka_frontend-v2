import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IHelpRequestsHttpService } from './help-requests-http.interface';
import { BaseHttpService } from '@shared/base/base-http.service';
import { HelpRequestsList } from '@shared/types/help-request';
import { ApplicationStatus } from '@shared/enums/application-status.enum';
import { CreateHelpRequestDto } from '@shared/dtos/create-help-request.dto';

@Injectable({
  providedIn: 'root',
})
export class HelpRequestsHttpService
  extends BaseHttpService
  implements IHelpRequestsHttpService
{
  private readonly _helpRequestsEndpoint = `${this._apiUrl}/api/help-requests`;

  public getPublished(): Observable<HelpRequestsList> {
    return this._httpClient.get<HelpRequestsList>(
      `${this._helpRequestsEndpoint}/published`,
      {
        params: new HttpParams()
          .append('statuses', ApplicationStatus.PUBLISHED)
          .append('page', 0)
          .append('size', 10),
      }
    );
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
