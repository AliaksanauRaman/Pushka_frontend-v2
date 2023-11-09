import {
  ChangeDetectionStrategy,
  Component,
  Input,
  inject,
} from '@angular/core';

import { ApplicationCardTransportationInfoComponent } from '../application-card-transportation-info/application-card-transportation-info.component';
import { ApplicationCardCommentComponent } from '../application-card-comment/application-card-comment.component';
import { ApplicationCardUserDetailsComponent } from '../application-card-user-details/application-card-user-details.component';

import { ApplicationCardService } from './application-card.service';

import { Application } from '@shared/types/application';

@Component({
  selector: 'pu-application-card',
  templateUrl: './application-card.component.html',
  styleUrls: ['./application-card.component.scss'],
  providers: [ApplicationCardService],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    ApplicationCardTransportationInfoComponent,
    ApplicationCardCommentComponent,
    ApplicationCardUserDetailsComponent,
  ],
})
export class ApplicationCardComponent {
  private readonly _service = inject(ApplicationCardService);

  @Input()
  public set application(value: Application) {
    this._service.setApplication(value);
  }
}
