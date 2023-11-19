import {
  ChangeDetectionStrategy,
  Component,
  Input,
  signal,
} from '@angular/core';

import { HelpRequestCardComponent } from '../help-request-card/help-request-card.component';
import { IconButtonComponent } from '@shared/components/icon-button/icon-button.component';

import { BaseApplicationsListComponent } from '../../base/base-applications-list/base-applications-list.component';
import { HelpRequest } from '@shared/types/help-request';

@Component({
  selector: 'pu-help-requests-list',
  templateUrl: './help-requests-list.component.html',
  styleUrl: '../../styles/_applications-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [HelpRequestCardComponent, IconButtonComponent],
})
export class HelpRequestsListComponent extends BaseApplicationsListComponent {
  @Input({ required: true })
  public set helpRequestsList(value: ReadonlyArray<HelpRequest>) {
    this._helpRequestsList.set(value);
  }

  protected readonly _helpRequestsList = signal<ReadonlyArray<HelpRequest>>([]);
}
