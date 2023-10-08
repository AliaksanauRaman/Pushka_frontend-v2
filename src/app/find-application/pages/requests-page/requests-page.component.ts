import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'pu-requests-page',
  templateUrl: './requests-page.component.html',
  styleUrls: ['./requests-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class RequestsPageComponent {}
