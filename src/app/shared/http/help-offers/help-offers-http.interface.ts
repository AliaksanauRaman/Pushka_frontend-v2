import { Observable } from 'rxjs';

export interface IHelpOffersHttpService {
  getPublished(): Observable<unknown>;
  createOne(createHelpOfferDto: unknown): Observable<unknown>;
  deleteOne(helpOfferId: number): Observable<unknown>;
}
