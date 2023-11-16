import {
  ChangeDetectionStrategy,
  Component,
  Input,
  signal,
} from '@angular/core';

import { ApplicationCardTagComponent } from '../application-card-tag/application-card-tag.component';
import { IconButtonComponent } from '@shared/components/icon-button/icon-button.component';

import { MyApplicationType } from '@shared/enums/my-application-type.enum';

@Component({
  selector: 'pu-application-card-header',
  templateUrl: './application-card-header.component.html',
  styleUrl: './application-card-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [ApplicationCardTagComponent, IconButtonComponent],
})
export class ApplicationCardHeaderComponent {
  @Input()
  public set applicationType(value: MyApplicationType) {
    this._applicationType.set(value);
  }

  protected readonly _applicationType = signal(MyApplicationType.OFFER);
}
