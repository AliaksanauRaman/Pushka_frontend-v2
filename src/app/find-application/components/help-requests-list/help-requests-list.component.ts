import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  signal,
} from '@angular/core';
import { transition, trigger, useAnimation } from '@angular/animations';

import { applicationCardFadeIn } from '@shared/animations/application-card-fade-in';
import { applicationCardSlideOut } from '@shared/animations/application-card-slide-out';

import { HelpRequestCardComponent } from '../help-request-card/help-request-card.component';
import { IconButtonComponent } from '@shared/components/icon-button/icon-button.component';

import { BaseApplicationsListComponent } from '../../base/base-applications-list/base-applications-list.component';
import { HelpRequest } from '@shared/types/help-request';

@Component({
  selector: 'pu-help-requests-list',
  templateUrl: './help-requests-list.component.html',
  styleUrl: '../../styles/_applications-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('fadeInSlideOut', [
      transition(':enter', useAnimation(applicationCardFadeIn)),
      transition(':leave', useAnimation(applicationCardSlideOut)),
    ]),
  ],
  standalone: true,
  imports: [HelpRequestCardComponent, IconButtonComponent],
})
export class HelpRequestsListComponent extends BaseApplicationsListComponent {
  @Input({ required: true })
  public set helpRequestsList(value: ReadonlyArray<HelpRequest>) {
    this._helpRequestsList.set(value);
  }

  @Output()
  public readonly helpRequestDeleted = new EventEmitter<HelpRequest>();

  protected readonly _helpRequestsList = signal<ReadonlyArray<HelpRequest>>([]);
}
