import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { AsyncPipe } from '@angular/common';
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { tap } from 'rxjs';

import { FieldErrorsComponent } from '@shared/components/field-errors/field-errors.component';
import { PlaceFieldComponent } from '@shared/components/place-field/place-field.component';
import { DateFieldComponent } from '@shared/components/date-field/date-field.component';
import { TextareaFieldComponent } from '@shared/components/textarea-field/textarea-field.component';
import { TextFieldComponent } from '@shared/components/text-field/text-field.component';
import { EmailFieldComponent } from '@shared/components/email-field/email-field.component';
import { PhoneFieldComponent } from '@shared/components/phone-field/phone-field.component';
import { CheckboxFieldComponent } from '@shared/components/checkbox-field/checkbox-field.component';
import { AccentButtonComponent } from '@shared/components/accent-button/accent-button.component';

import { SendParcelFormService } from './send-parcel-form.service';
import { PlacesService } from '@shared/services/places/places.service';

import { SEND_PARCEL_FORM_CONFIG } from './send-parcel-form.config';
import { CustomValidators } from '@shared/validators';
import { Place } from '@shared/types/place';
import { Phone } from '@shared/types/phone';
import { ValidSendParcelFormValue } from '@shared/types/valid-send-parcel-form-value';

@Component({
  selector: 'pu-send-parcel-form',
  templateUrl: './send-parcel-form.component.html',
  styleUrls: [
    '../../../styles/components/_form.component.scss',
    './send-parcel-form.component.scss',
  ],
  providers: [SendParcelFormService],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    AsyncPipe,
    ReactiveFormsModule,
    TranslateModule,
    FieldErrorsComponent,
    PlaceFieldComponent,
    DateFieldComponent,
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
  private readonly _service = inject(SendParcelFormService);
  protected readonly _config = inject(SEND_PARCEL_FORM_CONFIG);
  protected readonly _places = toSignal(
    inject(PlacesService).translatedPlaces$
  );

  protected readonly _state$ = this._service.state$.pipe(
    tap((state) => {
      if (state.isSuccess) {
        return;
      }

      if (state.isLoading) {
        this._sendParcelForm.disable();
      } else {
        this._sendParcelForm.enable();
      }
    })
  );
  protected readonly _sendParcelForm = this._formBuilder.group({
    departurePlace: [null as Place | null, [Validators.required]],
    destination: [null as Place | null, [Validators.required]],
    applicationIsValidUntil: [null as Date | null, [Validators.required]],
    description: ['', [Validators.required]],
    fullName: ['', [Validators.required]],
    email: ['', [Validators.required, CustomValidators.emailFormat]],
    phone: [
      null as Phone | null,
      [
        CustomValidators.countryCodeRequired,
        CustomValidators.phoneNumberRequired,
        CustomValidators.phoneNumberFormat,
      ],
    ],
    allowedItemsConfirmation: [false, [Validators.requiredTrue]],
    noServiceResponsibilityConfirmation: [false, [Validators.requiredTrue]],
  });

  protected handleSendParcelFormSubmit(): void {
    if (this._sendParcelForm.invalid) {
      return;
    }

    this._service.handleValidSendParcelFormSubmit(
      new ValidSendParcelFormValue(this._sendParcelForm.getRawValue())
    );
  }
}
