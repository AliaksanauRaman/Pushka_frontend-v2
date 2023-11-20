import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  signal,
} from '@angular/core';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Store } from '@ngxs/store';
import { TranslateModule } from '@ngx-translate/core';
import { finalize, tap } from 'rxjs';

import { FieldErrorsComponent } from '@shared/components/field-errors/field-errors.component';
import { PlaceFieldComponent } from '@shared/components/place-field/place-field.component';
import { DateFieldComponent } from '@shared/components/date-field/date-field.component';
import { TextareaFieldComponent } from '@shared/components/textarea-field/textarea-field.component';
import { TextFieldComponent } from '@shared/components/text-field/text-field.component';
import { EmailFieldComponent } from '@shared/components/email-field/email-field.component';
import { PhoneFieldComponent } from '@shared/components/phone-field/phone-field.component';
import { CheckboxFieldComponent } from '@shared/components/checkbox-field/checkbox-field.component';
import { AccentButtonComponent } from '@shared/components/accent-button/accent-button.component';

import { SendParcelFlowFactory } from './send-parcel-flow.factory';
import { PlacesService } from '@shared/services/places/places.service';

import { SEND_PARCEL_FORM_CONFIG } from './send-parcel-form.config';
import { CustomValidators } from '@shared/validators';
import { Place } from '@shared/types/place';
import { Phone } from '@shared/types/phone';
import { ValidSendParcelFormValue } from '@shared/types/valid-send-parcel-form-value';
import { UserState } from '@store/user';

@Component({
  selector: 'pu-send-parcel-form',
  templateUrl: './send-parcel-form.component.html',
  styleUrls: [
    '../../../styles/components/_form.component.scss',
    './send-parcel-form.component.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
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
  private readonly _destroyRef = inject(DestroyRef);
  private readonly _store = inject(Store);
  private readonly _formBuilder = inject(NonNullableFormBuilder);
  private readonly _flowFactory = inject(SendParcelFlowFactory);
  protected readonly _config = inject(SEND_PARCEL_FORM_CONFIG);
  protected readonly _places = toSignal(
    inject(PlacesService).translatedPlaces$
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
  protected readonly _isLoading = signal(false);

  protected handleSendParcelFormSubmit(): void {
    if (this._sendParcelForm.invalid) {
      return;
    }

    this._isLoading.set(true);
    this._sendParcelForm.disable();

    this._flowFactory
      .buildFlow(this._store.selectSnapshot(UserState.stream) !== null)
      .handleValidSendParcelFormSubmit(
        new ValidSendParcelFormValue(this._sendParcelForm.getRawValue())
      )
      .pipe(
        tap(() => this._sendParcelForm.reset()),
        finalize(() => {
          this._isLoading.set(false);
          this._sendParcelForm.enable();
        }),
        takeUntilDestroyed(this._destroyRef)
      )
      .subscribe();
  }
}
