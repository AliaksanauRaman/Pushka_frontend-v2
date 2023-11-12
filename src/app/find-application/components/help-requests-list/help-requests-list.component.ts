import {
  ChangeDetectionStrategy,
  Component,
  Input,
  signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { ApplicationCardComponent } from '../application-card/application-card.component';
import { TextLinkComponent } from '@shared/components/text-link/text-link.component';
import { PlaceholderComponent } from '@shared/components/placeholder/placeholder.component';
import { IconButtonComponent } from '@shared/components/icon-button/icon-button.component';

import { BaseApplicationsListComponent } from '../../base/base-applications-list/base-applications-list.component';
import { HelpRequestsList } from '@shared/types/help-request';

@Component({
  selector: 'pu-help-requests-list',
  templateUrl: './help-requests-list.component.html',
  styleUrl: '../../styles/_applications-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    RouterLink,
    TranslateModule,
    ApplicationCardComponent,
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

  protected readonly _helpRequestsList = signal(new HelpRequestsList([]));
}
