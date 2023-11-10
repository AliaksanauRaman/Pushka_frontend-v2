import { ChangeDetectionStrategy, Component } from '@angular/core';

import { FilterByPlaceFieldComponent } from '@shared/components/filter-by-place-field/filter-by-place-field.component';
import { ApplicationCardComponent } from '../../components/application-card/application-card.component';

@Component({
  selector: 'pu-requests-page',
  templateUrl: './requests-page.component.html',
  styleUrls: ['./requests-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [FilterByPlaceFieldComponent, ApplicationCardComponent],
})
export class RequestsPageComponent {}
