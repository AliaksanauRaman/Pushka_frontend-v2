import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseHttpService } from '@shared/base/base-http.service';
import { IHelpOffersHttpService } from './help-offers-http.interface';

@Injectable({
  providedIn: 'root',
})
export class HelpOffersHttpService
  extends BaseHttpService
  implements IHelpOffersHttpService
{
  private readonly _helpOffersEndpoint = `${this._apiUrl}/api/help-offers`;

  public getPublished(): Observable<unknown> {
    return this._httpClient.get<unknown>(
      `${this._helpOffersEndpoint}/published`
    );
  }

  public createOne(createHelpOfferDto: unknown): Observable<unknown> {
    return this._httpClient.post<unknown>(
      this._helpOffersEndpoint,
      createHelpOfferDto,
      { context: this.authorizedContext }
    );
  }

  public deleteOne(helpOfferId: number): Observable<unknown> {
    return this._httpClient.patch<null>(
      `${this._helpOffersEndpoint}/${helpOfferId}`,
      { status: 'DELETED' }, // TODO: Type
      { context: this.authorizedContext, observe: 'response' }
    );
  }
}
