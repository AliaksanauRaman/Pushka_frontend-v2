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
  Place.build(1, 'country.belarus', 1, 'city.belarus.minsk'),
  Place.build(1, 'country.belarus', 2, 'city.belarus.vitebsk'),
  Place.build(1, 'country.belarus', 3, 'city.belarus.gomel'),
  Place.build(1, 'country.belarus', 4, 'city.belarus.brest'),
  Place.build(2, 'country.poland', 5, 'city.poland.warsaw'),
  Place.build(2, 'country.poland', 6, 'city.poland.krakow'),
  Place.build(2, 'country.poland', 7, 'city.poland.lodz'),
  Place.build(2, 'country.poland', 8, 'city.poland.wroclaw'),
];
