import { ChangeDetectionStrategy, Component } from '@angular/core';

import { SendParcelFormComponent } from '../../components/send-parcel-form/send-parcel-form.component';

@Component({
  selector: 'pu-send-parcel-page',
  templateUrl: './send-parcel-page.component.html',
  styleUrls: ['./send-parcel-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [SendParcelFormComponent],
})
export class SendParcelPageComponent {}
