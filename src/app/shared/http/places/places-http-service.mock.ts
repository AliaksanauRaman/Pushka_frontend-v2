import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

import { IPlacesHttpService } from './places-http-service.interface';
import { Place } from '@shared/types/place';

@Injectable()
export class PlacesHttpServiceMock implements IPlacesHttpService {
  public getAll(): Observable<ReadonlyArray<Place>> {
    return of(MOCK_RESPONSE).pipe(delay(1000));
  }
}

const MOCK_RESPONSE = [
  Place.build(1, 'country.belarus', 1, 'city.minsk'),
  Place.build(1, 'country.belarus', 2, 'city.vitebsk'),
];
