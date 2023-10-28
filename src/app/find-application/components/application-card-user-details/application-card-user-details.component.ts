import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { NgOptimizedImage, NgIf } from '@angular/common';

import { PhoneComponent } from '@shared/components/phone/phone.component';
import { EmailComponent } from '@shared/components/email/email.component';

import { GeneratorService } from '@shared/services/generator/generator.service';

import { Phone } from '@shared/types/phone';

@Component({
  selector: 'pu-application-card-user-details',
  templateUrl: './application-card-user-details.component.html',
  styleUrls: ['./application-card-user-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgOptimizedImage, NgIf, PhoneComponent, EmailComponent],
})
export class ApplicationCardUserDetailsComponent {
  protected readonly _showContactsButtonId =
    inject(GeneratorService).generateUUID();

  protected readonly _areContactsShown = signal(false);

  // TODO: Temp
  public phone = new Phone('+48', '123456789');
  public email = 'test.user@gmail.com';
}
