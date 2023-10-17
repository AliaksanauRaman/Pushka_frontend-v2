import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ApplicationCardComponent } from '../../components/application-card/application-card.component';

@Component({
  selector: 'pu-requests-page',
  templateUrl: './requests-page.component.html',
  styleUrls: ['./requests-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [ApplicationCardComponent],
})
export class RequestsPageComponent {}
