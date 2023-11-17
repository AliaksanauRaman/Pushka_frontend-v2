import { Observable } from 'rxjs';

import { FilterByPlaceValue } from '@shared/types/filter-by-place-value';
import { DeliveryOffersList } from '@shared/types/delivery-offer';
import { CreateDeliveryOfferDto } from '@shared/dtos/create-delivery-offer.dto';

export interface IDeliveryOffersHttpService {
  getPublished(filterValue: FilterByPlaceValue): Observable<DeliveryOffersList>;
  createOne(
    createDeliveryOfferDto: CreateDeliveryOfferDto
  ): Observable<unknown>;
  deleteOne(deliveryOfferId: number): Observable<unknown>;
}
