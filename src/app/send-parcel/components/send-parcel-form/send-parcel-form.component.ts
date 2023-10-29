import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AsyncPipe, NgIf } from '@angular/common';
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { PlaceFieldComponent } from '@shared/components/place-field/place-field.component';
import { DateRangeFieldComponent } from '@shared/components/date-range-field/date-range-field.component';
import { TextareaFieldComponent } from '@shared/components/textarea-field/textarea-field.component';
import { TextFieldComponent } from '@shared/components/text-field/text-field.component';
import { EmailFieldComponent } from '@shared/components/email-field/email-field.component';
import { PhoneFieldComponent } from '@shared/components/phone-field/phone-field.component';
import { CheckboxFieldComponent } from '@shared/components/checkbox-field/checkbox-field.component';
import { AccentButtonComponent } from '@shared/components/accent-button/accent-button.component';

import { PlacesService } from '@shared/services/places/places.service';

@Component({
  selector: 'pu-send-parcel-form',
  templateUrl: './send-parcel-form.component.html',
  styleUrls: ['./send-parcel-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    NgIf,
    AsyncPipe,
    ReactiveFormsModule,
    PlaceFieldComponent,
    DateRangeFieldComponent,
    TextareaFieldComponent,
    TextFieldComponent,
    EmailFieldComponent,
    PhoneFieldComponent,
    CheckboxFieldComponent,
    AccentButtonComponent,
  ],
})
export class SendParcelFormComponent {
  private readonly _formBuilder = inject(NonNullableFormBuilder);
  protected readonly _places$ = inject(PlacesService).translatedPlaces$;

  protected readonly _sendParcelForm = this._formBuilder.group({
    departurePlace: [null, [Validators.required]],
    destinationPlace: [null, Validators.required],
    validityPeriod: [null],
    comment: ['', Validators.required],
    name: ['', Validators.required],
    email: ['', Validators.required],
    phone: [null, Validators.required],
    allowedItemsConfirmation: [false, Validators.requiredTrue],
    noServiceResponsibilityConfirmation: [false, Validators.requiredTrue],
  });

  protected handleSendParcelFormSubmit(): void {
    console.log(this._sendParcelForm.getRawValue());
  }
}
