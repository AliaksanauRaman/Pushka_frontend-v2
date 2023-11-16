import {
  ChangeDetectionStrategy,
  Component,
  Input,
  signal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { Select } from '@ngxs/store';
import { TranslateModule } from '@ngx-translate/core';
import { Observable } from 'rxjs';

import { HelpRequestCardComponent } from '../help-request-card/help-request-card.component';
import { TextLinkComponent } from '@shared/components/text-link/text-link.component';
import { PlaceholderComponent } from '@shared/components/placeholder/placeholder.component';
import { IconButtonComponent } from '@shared/components/icon-button/icon-button.component';

import { BaseApplicationsListComponent } from '../../base/base-applications-list/base-applications-list.component';
import { HelpRequestsList } from '@shared/types/help-request';
import { UserState } from '@store/user';
import { User } from '@shared/types/user';

@Component({
  selector: 'pu-help-requests-list',
  templateUrl: './help-requests-list.component.html',
  styleUrl: '../../styles/_applications-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    RouterLink,
    TranslateModule,
    HelpRequestCardComponent,
    TextLinkComponent,
    PlaceholderComponent,
    IconButtonComponent,
  ],
})
export class HelpRequestsListComponent extends BaseApplicationsListComponent {
  @Input({ required: true })
  public set helpRequestsList(value: HelpRequestsList) {
    this._helpRequestsList.set(value);
  }

  @Select(UserState.stream)
  private readonly _user$!: Observable<User | null>;

  protected readonly _user = toSignal(this._user$);
  protected readonly _helpRequestsList = signal(new HelpRequestsList([]));
}
