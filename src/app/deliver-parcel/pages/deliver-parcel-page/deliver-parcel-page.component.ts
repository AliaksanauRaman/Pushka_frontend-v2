import { ChangeDetectionStrategy, Component } from '@angular/core';

import { DeliverParcelFormComponent } from '../../components/deliver-parcel-form/deliver-parcel-form.component';

@Component({
  selector: 'pu-deliver-parcel-page',
  templateUrl: './deliver-parcel-page.component.html',
  styleUrls: ['./deliver-parcel-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [DeliverParcelFormComponent],
})
export class DeliverParcelPageComponent {}
