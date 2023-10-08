import { Observable } from 'rxjs';

import { CreateDeliveryOfferDto } from '@shared/dtos/create-delivery-offer.dto';

export interface IDeliveryOffersHttpService {
  getPublished(): Observable<unknown>;
  createOne(
    createDeliveryOfferDto: CreateDeliveryOfferDto
  ): Observable<unknown>;
  deleteOne(deliveryOfferId: number): Observable<unknown>;
}
