import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ApplicationCardTransportationInfoComponent } from '../application-card-transportation-info/application-card-transportation-info.component';
import { ApplicationCardCommentComponent } from '../application-card-comment/application-card-comment.component';
import { ApplicationCardUserDetailsComponent } from '../application-card-user-details/application-card-user-details.component';

@Component({
  selector: 'pu-application-card',
  templateUrl: './application-card.component.html',
  styleUrls: ['./application-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    ApplicationCardTransportationInfoComponent,
    ApplicationCardCommentComponent,
    ApplicationCardUserDetailsComponent,
  ],
})
export class ApplicationCardComponent {}
