import { Pipe, PipeTransform } from '@angular/core';

import { ApplicationPlace } from '@shared/types/application-place';

@Pipe({
  name: 'cardPlaceLabel',
  standalone: true,
})
export class CardPlaceLabelPipe implements PipeTransform {
  public transform(value: ApplicationPlace): string {
    if (value.cityLabel === 'city.other') {
      return value.countryLabel;
    }

    return value.cityLabel;
  }
}
