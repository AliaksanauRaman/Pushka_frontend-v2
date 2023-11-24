import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { MyApplicationTypeOptionIdPipe } from './my-application-type-option-id.pipe';

import { BaseMyApplicationTypeFieldComponent } from '@shared/base/base-my-application-type-field.component';
import { MyApplicationTypeOption } from '@shared/types/my-application-type-option';

@Component({
  selector: 'pu-my-application-type-radio-field',
  templateUrl: './my-application-type-radio-field.component.html',
  styleUrl: './my-application-type-radio-field.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [TranslateModule, MyApplicationTypeOptionIdPipe],
})
export class MyApplicationTypeRadioFieldComponent extends BaseMyApplicationTypeFieldComponent {
  protected selectOption(option: MyApplicationTypeOption): void {
    this.optionSelect.emit(option);
  }
}
