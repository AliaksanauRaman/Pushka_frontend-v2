import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

import { IDeliveryOffersHttpService } from './delivery-offers-http.interface';
import {
  DeliveryOffer,
  DeliveryOffersList,
} from '@shared/types/delivery-offer';
import { ApplicationStatus } from '@shared/enums/application-status.enum';
import { CreateDeliveryOfferDto } from '@shared/dtos/create-delivery-offer.dto';

const MOCK_DELIVERY_OFFER = new DeliveryOffer(
  1,
  1,
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
  public getPublished(): Observable<DeliveryOffersList> {
    return of(
      new DeliveryOffersList(new Array(10).fill(MOCK_DELIVERY_OFFER))
    ).pipe(delay(1000));
  }

  public createOne(
    _createDeliveryOfferDto: CreateDeliveryOfferDto
  ): Observable<unknown> {
    throw new Error('Method not implemented.');
  }

  public deleteOne(_deliveryOfferId: number): Observable<unknown> {
    throw new Error('Method not implemented.');
  }
}
