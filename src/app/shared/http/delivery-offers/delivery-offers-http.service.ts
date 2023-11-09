import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IDeliveryOffersHttpService } from './delivery-offers-http.interface';
import { BaseHttpService } from '@shared/base/base-http.service';

import { DeliveryOffersList } from '@shared/types/delivery-offer';
import { ApplicationStatus } from '@shared/enums/application-status.enum';
import { CreateDeliveryOfferDto } from '@shared/dtos/create-delivery-offer.dto';

@Injectable({
  providedIn: 'root',
})
export class DeliveryOffersHttpService
  extends BaseHttpService
  implements IDeliveryOffersHttpService
{
  private readonly _deliveryOffersEndpoint = `${this._apiUrl}/api/help-offers`;

  public getPublished(): Observable<DeliveryOffersList> {
    return this._httpClient.get<DeliveryOffersList>(
      `${this._deliveryOffersEndpoint}`,
      {
        params: new HttpParams()
          .append('statuses', ApplicationStatus.PUBLISHED)
          .append('page', 0)
          .append('size', 10),
      }
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
