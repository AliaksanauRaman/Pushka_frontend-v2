import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'pu-send-parcel-page',
  templateUrl: './send-parcel-page.component.html',
  styleUrls: ['./send-parcel-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class SendParcelPageComponent {}
