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
import { DateRangeFieldComponent } from '@shared/components/date-range-field/date-range-field.component';
import { EmailFieldComponent } from '@shared/components/email-field/email-field.component';
import { TextFieldComponent } from '@shared/components/text-field/text-field.component';
import { TextareaFieldComponent } from '@shared/components/textarea-field/textarea-field.component';
import { PhoneFieldComponent } from '@shared/components/phone-field/phone-field.component';
import { CheckboxFieldComponent } from '@shared/components/checkbox-field/checkbox-field.component';
import { AccentButtonComponent } from '@shared/components/accent-button/accent-button.component';

import { DeliverParcelFlowFactory } from './deliver-parcel-flow.factory';
import { PlacesService } from '@shared/services/places/places.service';

import { DELIVER_PARCEL_FORM_CONFIG } from './deliver-parcel-form.config';
import { CustomValidators } from '@shared/validators';
import { Place } from '@shared/types/place';
import { DateRange } from '@shared/types/date-range';
import { Phone } from '@shared/types/phone';
import { ValidDeliverParcelFormValue } from '@shared/types/valid-deliver-parcel-form-value';
import { UserState } from '@store/user';

@Component({
  selector: 'pu-deliver-parcel-form',
  templateUrl: './deliver-parcel-form.component.html',
  styleUrls: [
    '../../../styles/components/_form.component.scss',
    './deliver-parcel-form.component.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
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
  private readonly _destroyRef = inject(DestroyRef);
  private readonly _store = inject(Store);
  private readonly _formBuilder = inject(NonNullableFormBuilder);
  private readonly _flowFactory = inject(DeliverParcelFlowFactory);
  protected readonly _config = inject(DELIVER_PARCEL_FORM_CONFIG);
  protected readonly _places = toSignal(
    inject(PlacesService).translatedPlaces$
  );

  protected readonly _deliverParcelForm = this._formBuilder.group({
    departurePlace: [null as Place | null, [Validators.required]],
    destination: [null as Place | null, Validators.required],
    departureAndArrivalDates: [
      null as DateRange | null,
      CustomValidators.requiredDateRange,
    ],
    description: ['', Validators.required],
    fullName: ['', Validators.required],
    email: ['', [Validators.required, CustomValidators.emailFormat]],
    phone: [
      null as Phone | null,
      [
        CustomValidators.countryCodeRequired,
        CustomValidators.phoneNumberRequired,
        CustomValidators.phoneNumberFormat,
      ],
    ],
    allowedItemsConfirmation: [false, Validators.requiredTrue],
    noServiceResponsibilityConfirmation: [false, Validators.requiredTrue],
  });
  protected readonly _isLoading = signal(false);

  protected handleDeliverParcelFormSubmit(): void {
    if (this._deliverParcelForm.invalid) {
      return;
    }

    this._isLoading.set(true);
    this._deliverParcelForm.disable();

    this._flowFactory
      .buildFlow(this._store.selectSnapshot(UserState.stream) !== null)
      .handleValidDeliverParcelFormSubmit(
        new ValidDeliverParcelFormValue(this._deliverParcelForm.getRawValue())
      )
      .pipe(
        tap(() => this._deliverParcelForm.reset()),
        finalize(() => {
          this._isLoading.set(false);
          this._deliverParcelForm.enable();
        }),
        takeUntilDestroyed(this._destroyRef)
      )
      .subscribe();
  }
}
