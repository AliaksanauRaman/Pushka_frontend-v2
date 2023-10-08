import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';

import { TextFieldComponent } from '@shared/components/text-field/text-field.component';

@Component({
  selector: 'pu-create-help-request-form',
  templateUrl: './create-help-request-form.component.html',
  styleUrls: ['./create-help-request-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [ReactiveFormsModule, TextFieldComponent],
})
export class CreateHelpRequestFormComponent {
  private readonly _formBuilder = inject(NonNullableFormBuilder);

  protected readonly _createHelpRequestForm = this._formBuilder.group({
    fullName: [''],
  });

  protected handleCreateHelpRequestFormSubmit(): void {
    if (this._createHelpRequestForm.invalid) {
      return;
    }

    // TODO
  }
}
