import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IHelpRequestsHttpService } from './help-requests-http.interface';
import { BaseHttpService } from '@shared/base/base-http.service';
import { CreateHelpRequestDto } from '@shared/dtos/create-help-request.dto';

@Injectable({
  providedIn: 'root',
})
export class HelpRequestsHttpService
  extends BaseHttpService
  implements IHelpRequestsHttpService
{
  private readonly _helpRequestsEndpoint = `${this._apiUrl}/api/help-requests`;

  public getPublished(): Observable<unknown> {
    return this._httpClient.get<unknown>(
      `${this._helpRequestsEndpoint}/published`
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
