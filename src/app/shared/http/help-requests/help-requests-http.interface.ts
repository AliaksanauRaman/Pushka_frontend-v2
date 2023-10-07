import { Observable } from 'rxjs';

export interface IHelpRequestsHttpService {
  getPublished(): Observable<unknown>;
  createOne(createHelpRequestDto: unknown): Observable<unknown>;
  deleteOne(helpRequestId: number): Observable<unknown>;
}
