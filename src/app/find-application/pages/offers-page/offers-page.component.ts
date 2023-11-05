import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'pu-offers-page',
  templateUrl: './offers-page.component.html',
  styleUrls: ['./offers-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class OffersPageComponent {}
