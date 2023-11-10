import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AsyncPipe, NgIf } from '@angular/common';
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { FieldErrorsComponent } from '@shared/components/field-errors/field-errors.component';
import { PlaceFieldComponent } from '@shared/components/place-field/place-field.component';
import { DateRangeFieldComponent } from '@shared/components/date-range-field/date-range-field.component';
import { EmailFieldComponent } from '@shared/components/email-field/email-field.component';
import { TextFieldComponent } from '@shared/components/text-field/text-field.component';
import { TextareaFieldComponent } from '@shared/components/textarea-field/textarea-field.component';
import { PhoneFieldComponent } from '@shared/components/phone-field/phone-field.component';
import { CheckboxFieldComponent } from '@shared/components/checkbox-field/checkbox-field.component';
import { AccentButtonComponent } from '@shared/components/accent-button/accent-button.component';

import { PlacesService } from '@shared/services/places/places.service';

import { CustomValidators } from '@shared/validators';
import { Place } from '@shared/types/place';
import { DateRange } from '@shared/types/date-range';
import { Phone } from '@shared/types/phone';

@Component({
  selector: 'pu-deliver-parcel-form',
  templateUrl: './deliver-parcel-form.component.html',
  styleUrls: ['./deliver-parcel-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    NgIf,
    AsyncPipe,
    ReactiveFormsModule,
    TranslateModule,
    FieldErrorsComponent,
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
export class DeliverParcelFormComponent {
  private readonly _formBuilder = inject(NonNullableFormBuilder);
  protected readonly _places$ = inject(PlacesService).translatedPlaces$;

  protected readonly _deliverParcelForm = this._formBuilder.group({
    departurePlace: [null as Place | null, [Validators.required]],
    destination: [null as Place | null, Validators.required],
    validityPeriod: [
      null as DateRange | null,
      CustomValidators.requiredDateRange,
    ],
    description: ['', Validators.required],
    fullName: ['', Validators.required],
    email: ['', Validators.required],
    phone: [null as Phone | null],
    allowedItemsConfirmation: [false, Validators.requiredTrue],
    noServiceResponsibilityConfirmation: [false, Validators.requiredTrue],
  });

  protected handleDeliverParcelFormSubmit(): void {
    if (this._deliverParcelForm.invalid) {
      return;
    }

    console.log(this._deliverParcelForm.getRawValue());
  }
}
