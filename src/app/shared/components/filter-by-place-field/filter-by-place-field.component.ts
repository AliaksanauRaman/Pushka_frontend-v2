import { ChangeDetectionStrategy, Component } from '@angular/core';

import { IconButtonComponent } from '@shared/components/icon-button/icon-button.component';

@Component({
  selector: 'pu-filter-by-place-field',
  templateUrl: './filter-by-place-field.component.html',
  styleUrls: [
    '../../../styles/components/_field.component.scss',
    './filter-by-place-field.component.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [IconButtonComponent],
})
export class FilterByPlaceFieldComponent {}
