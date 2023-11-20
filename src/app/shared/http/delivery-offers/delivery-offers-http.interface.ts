import { Observable } from 'rxjs';

import { FilterByPlaceValue } from '@shared/types/filter-by-place-value';
import { PageableData } from '@shared/types/pageable-data';
import { DeliveryOffer } from '@shared/types/delivery-offer';
import { AuthorizedCreateDeliveryOfferDto } from '@shared/dtos/authorized-create-delivery-offer.dto';
import { UnauthorizedCreateDeliveryOfferDto } from '@shared/dtos/unauthorized-create-delivery-offer.dto';

export interface IDeliveryOffersHttpService {
  getPublished(
    filterValue: FilterByPlaceValue
  ): Observable<PageableData<DeliveryOffer>>;
  authorizedCreateOne(
    dto: AuthorizedCreateDeliveryOfferDto
  ): Observable<unknown>;
  unauthorizedCreateOne(
    dto: UnauthorizedCreateDeliveryOfferDto
  ): Observable<unknown>;
  deleteOne(deliveryOfferId: number): Observable<unknown>;
}
