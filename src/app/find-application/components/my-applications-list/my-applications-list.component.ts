import {
  ChangeDetectionStrategy,
  Component,
  Input,
  signal,
} from '@angular/core';

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
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [MyApplicationCardComponent, IconButtonComponent],
})
export class MyApplicationsListComponent extends BaseApplicationsListComponent {
  @Input({ required: true })
  public set myApplicationsList(value: ReadonlyArray<MyApplication>) {
    this._myApplicationsList.set(value);
  }

  protected readonly _myApplicationsList = signal<ReadonlyArray<MyApplication>>(
    []
  );
}
