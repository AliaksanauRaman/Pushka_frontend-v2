import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  inject,
  signal,
} from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { CdkConnectedOverlay, CdkOverlayOrigin } from '@angular/cdk/overlay';
import { TranslateModule } from '@ngx-translate/core';

import { PanelComponent } from '@shared/components/panel/panel.component';
import { PanelItemComponent } from '@shared/components/panel-item/panel-item.component';
import { DisabledDirective } from '@shared/directives/disabled.directive';

import { PanelService } from '@shared/services/panel/panel.service';

import { MyApplicationTypeOption } from '@shared/types/my-application-type-option';

@Component({
  selector: 'pu-my-application-type-dropdown-field',
  templateUrl: './my-application-type-dropdown-field.component.html',
  styleUrls: [
    '../../../styles/components/_field.component.scss',
    './my-application-type-dropdown-field.component.scss',
  ],
  providers: [PanelService],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    NgOptimizedImage,
    CdkOverlayOrigin,
    CdkConnectedOverlay,
    TranslateModule,
    PanelComponent,
    PanelItemComponent,
    DisabledDirective,
  ],
})
export class MyApplicationTypeDropdownFieldComponent {
  protected readonly _panel = inject(PanelService);

  @Input({ required: true })
  public set options(value: ReadonlyArray<MyApplicationTypeOption>) {
    this._options.set(value);
  }

  @Input()
  public set selectedOption(value: MyApplicationTypeOption) {
    this._selectedOption.set(value);
  }

  @Input()
  public set isDisabled(value: boolean) {
    this._isDisabled.set(value);
  }

  @Output()
  public readonly optionSelect = new EventEmitter<MyApplicationTypeOption>();

  protected readonly _options = signal<ReadonlyArray<MyApplicationTypeOption>>(
    []
  );
  protected readonly _selectedOption = signal<MyApplicationTypeOption | null>(
    null
  );
  protected readonly _isDisabled = signal(false);

  protected selectOption(option: MyApplicationTypeOption): void {
    this._panel.close();
    this.optionSelect.emit(option);
  }
}
