import { Injectable, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Store } from '@ngxs/store';
import { combineLatest, map } from 'rxjs';

import { PlacesState } from '@store/places';
import { SelectedLocalizationState } from '@store/selected-localization';
import { Place } from '@shared/types/place';
import { TranslatedPlace } from '@shared/types/translated-place';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private readonly _store = inject(Store);
  private readonly _translateService = inject(TranslateService);

  public readonly places$ = this._store.select(PlacesState.places);
  public readonly translatedPlaces$ = combineLatest([
    this._store.select(SelectedLocalizationState.stream),
    this.places$,
  ]).pipe(
    map(([_, places]) => places.map((place) => this.translatePlace(place)))
  );

  private translatePlace(place: Place): TranslatedPlace {
    return new TranslatedPlace(
      place,
      this._translateService.instant(place.countryLabel),
      this._translateService.instant(place.cityLabel)
    );
  }
}
