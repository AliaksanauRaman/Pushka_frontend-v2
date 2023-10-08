import { ChangeDetectionStrategy, Component } from '@angular/core';

import { CreateHelpRequestFormComponent } from '../../components/create-help-request-form/create-help-request-form.component';

@Component({
  selector: 'pu-send-parcel-page',
  templateUrl: './send-parcel-page.component.html',
  styleUrls: ['./send-parcel-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CreateHelpRequestFormComponent],
})
export class SendParcelPageComponent {}
