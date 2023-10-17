import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DatePipe, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'pu-application-card-transportation-info',
  templateUrl: './application-card-transportation-info.component.html',
  styleUrls: ['./application-card-transportation-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [DatePipe, NgOptimizedImage],
})
export class ApplicationCardTransportationInfoComponent {
  public today = new Date();
}
