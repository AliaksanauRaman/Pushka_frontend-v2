import { ChangeDetectionStrategy, Component } from '@angular/core';

import { IconButtonComponent } from '@shared/components/icon-button/icon-button.component';

@Component({
  selector: 'pu-places-filter-field',
  templateUrl: './places-filter-field.component.html',
  styleUrls: [
    '../../../styles/components/_field.component.scss',
    './places-filter-field.component.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [IconButtonComponent],
})
export class PlacesFilterFieldComponent {}
