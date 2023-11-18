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
import { DateRangeFieldComponent } from '@shared/components/date-range-field/date-range-field.component';
import { EmailFieldComponent } from '@shared/components/email-field/email-field.component';
import { TextFieldComponent } from '@shared/components/text-field/text-field.component';
import { TextareaFieldComponent } from '@shared/components/textarea-field/textarea-field.component';
import { PhoneFieldComponent } from '@shared/components/phone-field/phone-field.component';
import { CheckboxFieldComponent } from '@shared/components/checkbox-field/checkbox-field.component';
import { AccentButtonComponent } from '@shared/components/accent-button/accent-button.component';

import { DeliverParcelFormService } from './deliver-parcel-form.service';
import { PlacesService } from '@shared/services/places/places.service';

import { DELIVER_PARCEL_FORM_CONFIG } from './deliver-parcel-form.config';
import { CustomValidators } from '@shared/validators';
import { Place } from '@shared/types/place';
import { DateRange } from '@shared/types/date-range';
import { Phone } from '@shared/types/phone';
import { ValidDeliverParcelFormValue } from '@shared/types/valid-deliver-parcel-form-value';

@Component({
  selector: 'pu-deliver-parcel-form',
  templateUrl: './deliver-parcel-form.component.html',
  styleUrls: [
    '../../../styles/components/_form.component.scss',
    './deliver-parcel-form.component.scss',
  ],
  providers: [DeliverParcelFormService],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
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
  private readonly _service = inject(DeliverParcelFormService);
  protected readonly _config = inject(DELIVER_PARCEL_FORM_CONFIG);
  protected readonly _places = toSignal(
    inject(PlacesService).translatedPlaces$
  );

  protected readonly _state$ = this._service.state$.pipe(
    tap((state) => {
      if (state.isSuccess) {
        return;
      }

      if (state.isLoading) {
        this._deliverParcelForm.disable();
      } else {
        this._deliverParcelForm.enable();
      }
    })
  );

  protected readonly _deliverParcelForm = this._formBuilder.group({
    departurePlace: [null as Place | null, [Validators.required]],
    destination: [null as Place | null, Validators.required],
    // TODO Naming
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

    this._service.handleValidDeliverParcelFormSubmit(
      new ValidDeliverParcelFormValue(this._deliverParcelForm.getRawValue())
    );
  }
}
