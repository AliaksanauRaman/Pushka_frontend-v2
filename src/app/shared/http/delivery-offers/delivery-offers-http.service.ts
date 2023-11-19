import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';

import { IDeliveryOffersHttpService } from './delivery-offers-http.interface';
import { BaseHttpService } from '@shared/base/base-http.service';

import { FilterByPlaceValue } from '@shared/types/filter-by-place-value';
import { PageableData } from '@shared/types/pageable-data';
import { DeliveryOffer } from '@shared/types/delivery-offer';
import { ApplicationStatus } from '@shared/enums/application-status.enum';
import { CreateDeliveryOfferDto } from '@shared/dtos/create-delivery-offer.dto';
import { deliveryOffersPageableData } from '@shared/unknown-types-parsers/delivery-offers-pageable-data';

@Injectable({
  providedIn: 'root',
})
export class DeliveryOffersHttpService
  extends BaseHttpService
  implements IDeliveryOffersHttpService
{
  private readonly _deliveryOffersEndpoint = `${this._apiUrl}/api/help-offers`;

  public getPublished(
    filterValue: FilterByPlaceValue
  ): Observable<PageableData<DeliveryOffer>> {
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
      .get<unknown>(`${this._deliveryOffersEndpoint}`, {
        params: httpParams,
      })
      .pipe(
        map((responseData) => deliveryOffersPageableData.parse(responseData))
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
