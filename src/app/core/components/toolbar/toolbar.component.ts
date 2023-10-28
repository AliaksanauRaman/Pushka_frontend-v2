import {
  ChangeDetectionStrategy,
  Component,
  Input,
  signal,
  Output,
  EventEmitter,
} from '@angular/core';
import { NgIf, NgOptimizedImage, NgTemplateOutlet } from '@angular/common';
import { CdkMenu, CdkMenuItem, CdkMenuTrigger } from '@angular/cdk/menu';

import { LocalizationSelectionContainerComponent } from '@core/components/localization-selection-container/localization-selection-container.component';
import { SecondaryButtonComponent } from '@shared/components/secondary-button/secondary-button.component';

@Component({
  selector: 'pu-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    NgIf,
    NgOptimizedImage,
    NgTemplateOutlet,
    LocalizationSelectionContainerComponent,
    SecondaryButtonComponent,
    CdkMenu,
    CdkMenuItem,
    CdkMenuTrigger,
  ],
})
export class ToolbarComponent {
  @Input()
  public set isUserSignedIn(value: boolean) {
    this._isUserSignedIn.set(value);
  }

  @Output()
  public readonly logout = new EventEmitter<void>();

  protected readonly _isUserSignedIn = signal(false);

  // TODO: Temp
  public email = 'test.user@gmail.com';
}
