import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CdkConnectedOverlay, CdkOverlayOrigin } from '@angular/cdk/overlay';
import { TranslateModule } from '@ngx-translate/core';

import { PanelComponent } from '@shared/components/panel/panel.component';
import { PanelItemComponent } from '@shared/components/panel-item/panel-item.component';

import { PanelService } from '@shared/services/panel/panel.service';

import { BaseMyApplicationTypeFieldComponent } from '@shared/base/base-my-application-type-field.component';
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
    CdkOverlayOrigin,
    CdkConnectedOverlay,
    TranslateModule,
    PanelComponent,
    PanelItemComponent,
  ],
})
export class MyApplicationTypeDropdownFieldComponent extends BaseMyApplicationTypeFieldComponent {
  protected readonly _panel = inject(PanelService);

  protected selectOption(option: MyApplicationTypeOption): void {
    this._panel.close();
    this.optionSelect.emit(option);
  }
}
