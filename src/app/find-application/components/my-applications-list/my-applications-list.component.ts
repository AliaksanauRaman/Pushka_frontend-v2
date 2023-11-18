import {
  ChangeDetectionStrategy,
  Component,
  Input,
  signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { MyApplicationCardComponent } from '../my-application-card/my-application-card.component';
import { TextLinkComponent } from '@shared/components/text-link/text-link.component';
import { PlaceholderComponent } from '@shared/components/placeholder/placeholder.component';
import { IconButtonComponent } from '@shared/components/icon-button/icon-button.component';

import { BaseApplicationsListComponent } from '../../base/base-applications-list/base-applications-list.component';
import { MyApplicationsList } from '@shared/types/my-application';

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
  imports: [
    RouterLink,
    TranslateModule,
    MyApplicationCardComponent,
    TextLinkComponent,
    PlaceholderComponent,
    IconButtonComponent,
  ],
})
export class MyApplicationsListComponent extends BaseApplicationsListComponent {
  @Input({ required: true })
  public set myApplicationsList(value: MyApplicationsList) {
    this._myApplicationsList.set(value);
  }

  protected readonly _myApplicationsList = signal(new MyApplicationsList([]));
}
