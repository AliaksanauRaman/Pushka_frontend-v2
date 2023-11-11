import { Observable } from 'rxjs';

import { DeliveryOffersList } from '@shared/types/delivery-offer';
import { CreateDeliveryOfferDto } from '@shared/dtos/create-delivery-offer.dto';

export interface IDeliveryOffersHttpService {
  getPublished(): Observable<DeliveryOffersList>;
  createOne(
    createDeliveryOfferDto: CreateDeliveryOfferDto
  ): Observable<unknown>;
  deleteOne(deliveryOfferId: number): Observable<unknown>;
}
