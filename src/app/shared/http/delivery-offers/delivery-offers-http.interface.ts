import { Observable } from 'rxjs';

import { FilterByPlaceValue } from '@shared/types/filter-by-place-value';
import { PageableData } from '@shared/types/pageable-data';
import { DeliveryOffer } from '@shared/types/delivery-offer';
import { CreateDeliveryOfferDto } from '@shared/dtos/create-delivery-offer.dto';

export interface IDeliveryOffersHttpService {
  getPublished(
    filterValue: FilterByPlaceValue
  ): Observable<PageableData<DeliveryOffer>>;
  createOne(
    createDeliveryOfferDto: CreateDeliveryOfferDto
  ): Observable<unknown>;
  deleteOne(deliveryOfferId: number): Observable<unknown>;
}
