import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

import { IPlacesHttpService } from './places-http-service.interface';
import { BaseHttpService } from '@shared/base/base-http.service';
import { Place } from '@shared/types/place';
import { allPlacesResponseData } from '@shared/unknown-types-parsers/all-places-response-data';

@Injectable({
  providedIn: 'root',
})
export class PlacesHttpService
  extends BaseHttpService
  implements IPlacesHttpService
{
  public getAll(): Observable<ReadonlyArray<Place>> {
    return this._httpClient
      .get<unknown>(`${this._apiUrl}/api/places`)
      .pipe(map((responseData) => allPlacesResponseData.parse(responseData)));
  }
}
