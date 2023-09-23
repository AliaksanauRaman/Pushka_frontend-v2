import { Observable } from 'rxjs';

import { Place } from '@shared/types/place';

export interface IPlacesHttpService {
  getAll(): Observable<ReadonlyArray<Place>>;
}
