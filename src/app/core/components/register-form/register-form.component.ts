import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  inject,
} from '@angular/core';
import { AsyncPipe, NgIf } from '@angular/common';
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { tap } from 'rxjs';

import { FieldErrorsComponent } from '@shared/components/field-errors/field-errors.component';
import { TextFieldComponent } from '@shared/components/text-field/text-field.component';
import { EmailFieldComponent } from '@shared/components/email-field/email-field.component';
import { PasswordFieldComponent } from '@shared/components/password-field/password-field.component';
import { AccentButtonComponent } from '@shared/components/accent-button/accent-button.component';

import { RegisterFormService } from './register-form.service';

import { REGISTER_FORM_CONFIG } from './register-form.config';
import { CustomValidators } from '@shared/validators';
import { ValidRegisterFormValue } from '@shared/types/valid-register-form-value';

@Component({
  selector: 'pu-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: [
    '../../../styles/components/_form.component.scss',
    './register-form.component.scss',
  ],
  providers: [RegisterFormService],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    NgIf,
    AsyncPipe,
    ReactiveFormsModule,
    TranslateModule,
    FieldErrorsComponent,
    TextFieldComponent,
    EmailFieldComponent,
    PasswordFieldComponent,
    AccentButtonComponent,
  ],
})
export class RegisterFormComponent implements OnInit {
  private readonly _formBuilder = inject(NonNullableFormBuilder);
  private readonly _service = inject(RegisterFormService);
  protected readonly _config = inject(REGISTER_FORM_CONFIG);

  @Input()
  public set initialEmail(value: string) {
    this._initialEmail = value;
  }

  @Input()
  public set initialFullName(value: string) {
    this._initialFullName = value;
  }

  @Output()
  public readonly success = new EventEmitter<void>();

  protected readonly _registerForm = this._formBuilder.group(
    {
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required, CustomValidators.emailFormat]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(this._config.passwordMinLength),
          Validators.maxLength(this._config.passwordMaxLength),
          CustomValidators.atLeastOneLatinLetter,
          CustomValidators.atLeastOneDigit,
        ],
      ],
      passwordConfirmation: ['', [Validators.required]],
    },
    { validators: [CustomValidators.passwordsMatch] }
  );
  protected readonly state$ = this._service.state$.pipe(
    tap(({ isSuccess, isLoading }) => {
      if (isSuccess) {
        this.success.emit();
        return;
      }

      if (isLoading) {
        this._registerForm.disable();
      } else {
        this._registerForm.enable();
      }
    })
  );
  private _initialEmail = '';
  private _initialFullName = '';

  public ngOnInit(): void {
    this._registerForm.patchValue({
      email: this._initialEmail,
      fullName: this._initialFullName,
    });
  }

  protected handleRegisterFormSubmit(): void {
    if (this._registerForm.invalid) {
      return;
    }

    this._service.handleValidRegisterFormSubmit(
      new ValidRegisterFormValue(this._registerForm.getRawValue())
    );
  }
}
