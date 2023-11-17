import { Pipe, PipeTransform } from '@angular/core';

import { TranslatedPlace } from '@shared/types/translated-place';

@Pipe({
  name: 'translatedPlaceView',
  standalone: true
})
export class TranslatedPlaceViewPipe implements PipeTransform {
  public transform(value: TranslatedPlace): unknown {
    return `${value.plainCityLabel}, ${value.plainCountryLabel}`;
  }
}
