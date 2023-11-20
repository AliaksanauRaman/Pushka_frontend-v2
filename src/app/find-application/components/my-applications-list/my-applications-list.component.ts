import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  signal,
} from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

import { MyApplicationCardComponent } from '../my-application-card/my-application-card.component';
import { IconButtonComponent } from '@shared/components/icon-button/icon-button.component';

import { BaseApplicationsListComponent } from '../../base/base-applications-list/base-applications-list.component';
import { MyApplication } from '@shared/types/my-application';

@Component({
  selector: 'pu-my-applications-list',
  templateUrl: './my-applications-list.component.html',
  styleUrl: '../../styles/_applications-list.component.scss',
  styles: [
    `
      :host {
        height: 608px;
      }
    `,
  ],
  animations: [
    trigger('fadeInSlideOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-out', style({ opacity: 1 })),
      ]),
      transition(
        ':leave',
        animate(
          '300ms ease-in',
          style({ height: '0px', padding: '0px', left: '100%', opacity: 0 })
        )
      ),
    ]),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [MyApplicationCardComponent, IconButtonComponent],
})
export class MyApplicationsListComponent extends BaseApplicationsListComponent {
  @Input({ required: true })
  public set myApplicationsList(value: ReadonlyArray<MyApplication>) {
    this._myApplicationsList.set(value);
  }

  @Output()
  public readonly myApplicationDeleted = new EventEmitter<MyApplication>();

  protected readonly _myApplicationsList = signal<ReadonlyArray<MyApplication>>(
    []
  );
}
