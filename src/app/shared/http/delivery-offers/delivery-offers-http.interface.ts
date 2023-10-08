import { Observable } from 'rxjs';

export interface IDeliveryOffersHttpService {
  getPublished(): Observable<unknown>;
  createOne(createDeliveryOfferDto: unknown): Observable<unknown>;
  deleteOne(deliveryOfferId: number): Observable<unknown>;
}
