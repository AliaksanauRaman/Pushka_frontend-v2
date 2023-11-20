import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  inject,
  signal,
} from '@angular/core';
import { tap } from 'rxjs';

import { ApplicationCardHeaderComponent } from '../application-card-header/application-card-header.component';
import { HelpRequestCardTransportationInfoComponent } from '../help-request-card-transportation-info/help-request-card-transportation-info.component';
import { ApplicationCardCommentComponent } from '../application-card-comment/application-card-comment.component';
import { ApplicationCardUserDetailsComponent } from '../application-card-user-details/application-card-user-details.component';
import { SpinnerComponent } from '@shared/components/spinner/spinner.component';
import { ApplicationDirective } from '../../directives/application/application.directive';

import { DeleteHelpRequestService } from '../../services/delete-help-request/delete-help-request.service';

import { Application } from '@shared/types/application';
import { MyApplicationType } from '@shared/enums/my-application-type.enum';

@Component({
  selector: 'pu-help-request-card',
  standalone: true,
  templateUrl: './help-request-card.component.html',
  styleUrl: '../../styles/_application-card.component.scss',
  providers: [DeleteHelpRequestService],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ApplicationCardHeaderComponent,
    HelpRequestCardTransportationInfoComponent,
    ApplicationCardCommentComponent,
    ApplicationCardUserDetailsComponent,
    SpinnerComponent,
  ],
  hostDirectives: [
    {
      directive: ApplicationDirective,
      inputs: ['application'],
    },
  ],
})
export class HelpRequestCardComponent {
  protected readonly _deleteHelpRequest = inject(DeleteHelpRequestService);
  protected readonly _application =
    inject<ApplicationDirective<Application>>(ApplicationDirective);

  @Input()
  public set isMine(value: boolean) {
    this._isMine.set(value);
  }

  @Output()
  public readonly deleted = new EventEmitter<void>();

  protected readonly _isMine = signal(false);
  protected readonly _type = MyApplicationType.REQUEST;

  protected deleteHelpRequest(id: number): void {
    this._deleteHelpRequest
      .deleteById(id)
      .pipe(tap(() => this.deleted.emit()))
      .subscribe();
  }
}
