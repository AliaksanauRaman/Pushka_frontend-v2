import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'pu-deliver-parcel-page',
  templateUrl: './deliver-parcel-page.component.html',
  styleUrls: ['./deliver-parcel-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class DeliverParcelPageComponent {}
