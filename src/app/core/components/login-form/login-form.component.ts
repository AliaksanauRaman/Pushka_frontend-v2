import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
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
import { takeUntil, tap } from 'rxjs';

import { EmailFieldComponent } from '@shared/components/email-field/email-field.component';
import { PasswordFieldComponent } from '@shared/components/password-field/password-field.component';
import { AccentButtonComponent } from '@shared/components/accent-button/accent-button.component';

import { LoginFormService } from './login-form.service';

import { BaseDestroyer } from '@shared/base/base-destroyer';
import { CustomValidators } from '@shared/validators';
import { ValidLoginFormValue } from '@shared/types/valid-login-form-value';

@Component({
  selector: 'pu-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: [
    '../../../styles/components/_form.component.scss',
    './login-form.component.scss',
  ],
  providers: [LoginFormService],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    NgIf,
    AsyncPipe,
    ReactiveFormsModule,
    TranslateModule,
    EmailFieldComponent,
    PasswordFieldComponent,
    AccentButtonComponent,
  ],
})
export class LoginFormComponent extends BaseDestroyer {
  private readonly _formBuilder = inject(NonNullableFormBuilder);
  private readonly _service = inject(LoginFormService);

  @Output()
  public readonly success = new EventEmitter<void>();

  protected readonly _loginForm = this._formBuilder.group({
    email: ['', [Validators.required, CustomValidators.emailFormat]],
    password: ['', [Validators.required]],
  });
  protected readonly state$ = this._service.state$.pipe(
    tap(({ isSuccess, isLoading }) => {
      if (isSuccess) {
        this.success.emit();
        return;
      }

      if (isLoading) {
        this._loginForm.disable();
      } else {
        this._loginForm.enable();
      }
    }),
    takeUntil(this._destroy$)
  );

  protected handleLoginFormSubmit(): void {
    if (this._loginForm.invalid) {
      return;
    }

    this._service.handleValidLoginFormSubmit(
      new ValidLoginFormValue(this._loginForm.getRawValue())
    );
  }
}
