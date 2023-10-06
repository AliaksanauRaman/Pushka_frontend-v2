import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AsyncPipe, NgIf } from '@angular/common';

import { SuccessfulUserActivationViewComponent } from '../../components/successful-user-activation-view/successful-user-activation-view.component';
import { FailedUserActivationViewComponent } from '../../components/failed-user-activation-view/failed-user-activation-view.component';

import { ActivateUserPageService } from '../../services/activate-user-page.service';

@Component({
  selector: 'pu-activate-user-page',
  templateUrl: './activate-user-page.component.html',
  styleUrls: ['./activate-user-page.component.scss'],
  providers: [ActivateUserPageService],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    NgIf,
    AsyncPipe,
    SuccessfulUserActivationViewComponent,
    FailedUserActivationViewComponent,
  ],
})
export class ActivateUserPageComponent {
  protected readonly _activateUserPageService = inject(ActivateUserPageService);
}
