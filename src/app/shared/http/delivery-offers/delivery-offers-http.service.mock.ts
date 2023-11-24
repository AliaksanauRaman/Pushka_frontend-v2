import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

import { IDeliveryOffersHttpService } from './delivery-offers-http.interface';
import { FilterByPlaceValue } from '@shared/types/filter-by-place-value';
import { DeliveryOffer } from '@shared/types/delivery-offer';
import { ApplicationStatus } from '@shared/enums/application-status.enum';
import { AuthorizedCreateDeliveryOfferDto } from '@shared/dtos/authorized-create-delivery-offer.dto';
import { UnauthorizedCreateDeliveryOfferDto } from '@shared/dtos/unauthorized-create-delivery-offer.dto';
import { PageableData } from '@shared/types/pageable-data';

const MOCK_DELIVERY_OFFER = new DeliveryOffer(
  1,
  28244,
  { cityLabel: 'city.belarus.minsk', countryLabel: 'country.belarus' },
  { cityLabel: 'city.poland.warsaw', countryLabel: 'country.poland' },
  new Date(),
  new Date(),
  'Some description',
  'Raman Aliaksanau',
  'raman.aliaksanau@gmail.com',
  null,
  ApplicationStatus.PUBLISHED
);

@Injectable()
export class DeliveryOffersHttpServiceMock
  implements IDeliveryOffersHttpService
{
  public getPublished(
    _filterValue: FilterByPlaceValue
  ): Observable<PageableData<DeliveryOffer>> {
    const data: Array<DeliveryOffer> = [];

    for (let index = 0; index < 20; index++) {
      data.push({
        ...MOCK_DELIVERY_OFFER,
        id: index + 1,
      });
    }

    return of(
      new PageableData(
        data,
        data.length === 0,
        true,
        true,
        0,
        data.length,
        data.length,
        data.length,
        1
      )
    ).pipe(delay(200));
  }

  public authorizedCreateOne(
    _dto: AuthorizedCreateDeliveryOfferDto
  ): Observable<unknown> {
    return of(null).pipe(delay(1000));
  }

  public unauthorizedCreateOne(
    _dto: UnauthorizedCreateDeliveryOfferDto
  ): Observable<unknown> {
    return of(null).pipe(delay(1000));
  }

  public deleteOne(_deliveryOfferId: number): Observable<unknown> {
    return of(null).pipe(delay(3000));
  }
}
