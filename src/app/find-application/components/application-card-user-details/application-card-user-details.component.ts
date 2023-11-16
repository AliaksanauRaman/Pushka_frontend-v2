import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { AccountAvatarComponent } from '@shared/components/account-avatar/account-avatar.component';
import { PhoneComponent } from '@shared/components/phone/phone.component';
import { EmailComponent } from '@shared/components/email/email.component';
import { ApplicationDirective } from '../../directives/application/application.directive';

import { GeneratorService } from '@shared/services/generator/generator.service';

import { Application } from '@shared/types/application';

@Component({
  selector: 'pu-application-card-user-details',
  templateUrl: './application-card-user-details.component.html',
  styleUrls: ['./application-card-user-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    NgOptimizedImage,
    TranslateModule,
    AccountAvatarComponent,
    PhoneComponent,
    EmailComponent,
  ],
  hostDirectives: [
    {
      directive: ApplicationDirective,
      inputs: ['application'],
    },
  ],
})
export class ApplicationCardUserDetailsComponent {
  protected readonly _showContactsButtonId =
    inject(GeneratorService).generateUUID();
  protected readonly _application =
    inject<ApplicationDirective<Application>>(ApplicationDirective);

  protected readonly _areContactsShown = signal(false);
}
