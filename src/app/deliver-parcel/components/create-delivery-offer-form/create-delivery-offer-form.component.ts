import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';

import { TextFieldComponent } from '@shared/components/text-field/text-field.component';

@Component({
  selector: 'pu-create-delivery-offer-form',
  templateUrl: './create-delivery-offer-form.component.html',
  styleUrls: ['./create-delivery-offer-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [ReactiveFormsModule, TextFieldComponent],
})
export class CreateDeliveryOfferFormComponent {
  private readonly _formBuilder = inject(NonNullableFormBuilder);

  protected readonly _createDeliveryOfferForm = this._formBuilder.group({
    fullName: [''],
  });

  protected handleCreateDeliveryOfferFormSubmit(): void {
    if (this._createDeliveryOfferForm.invalid) {
      return;
    }

    // TODO
  }
}
