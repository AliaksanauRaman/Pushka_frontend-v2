import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'pu-help-offers-page',
  templateUrl: './help-offers-page.component.html',
  styleUrls: ['./help-offers-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class HelpOffersPageComponent {}
