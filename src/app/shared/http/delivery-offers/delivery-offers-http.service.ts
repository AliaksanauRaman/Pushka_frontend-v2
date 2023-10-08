import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IDeliveryOffersHttpService } from './delivery-offers-http.interface';
import { BaseHttpService } from '@shared/base/base-http.service';
import { CreateDeliveryOfferDto } from '@shared/dtos/create-delivery-offer.dto';

@Injectable({
  providedIn: 'root',
})
export class DeliveryOffersHttpService
  extends BaseHttpService
  implements IDeliveryOffersHttpService
{
  private readonly _deliveryOffersEndpoint = `${this._apiUrl}/api/help-offers`;

  public getPublished(): Observable<unknown> {
    return this._httpClient.get<unknown>(
      `${this._deliveryOffersEndpoint}/published`
    );
  }

  public createOne(
    createDeliveryOfferDto: CreateDeliveryOfferDto
  ): Observable<unknown> {
    return this._httpClient.post<unknown>(
      this._deliveryOffersEndpoint,
      createDeliveryOfferDto.toMap(),
      { context: this.authorizedContext }
    );
  }

  public deleteOne(deliveryOfferId: number): Observable<unknown> {
    return this._httpClient.patch<null>(
      `${this._deliveryOffersEndpoint}/${deliveryOfferId}`,
      { status: 'DELETED' }, // TODO: Type
      { context: this.authorizedContext, observe: 'response' }
    );
  }
}
