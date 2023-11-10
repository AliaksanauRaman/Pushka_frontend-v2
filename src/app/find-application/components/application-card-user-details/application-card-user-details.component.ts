import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
  signal,
} from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { AccountAvatarComponent } from '@shared/components/account-avatar/account-avatar.component';
import { PhoneComponent } from '@shared/components/phone/phone.component';
import { EmailComponent } from '@shared/components/email/email.component';

import { ApplicationCardService } from '../application-card/application-card.service';
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
})
export class ApplicationCardUserDetailsComponent implements OnInit {
  private readonly _applicationCardService = inject(ApplicationCardService);
  protected readonly _showContactsButtonId =
    inject(GeneratorService).generateUUID();

  protected readonly _application = signal<Application | null>(null);
  protected readonly _areContactsShown = signal(false);

  public ngOnInit(): void {
    this._application.set(this._applicationCardService.getApplication());
  }
}
