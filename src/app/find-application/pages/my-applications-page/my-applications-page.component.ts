import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  effect,
  inject,
  signal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Router, RouterLink } from '@angular/router';
import { Select } from '@ngxs/store';
import { TranslateModule } from '@ngx-translate/core';
import { Observable } from 'rxjs';

import { SpinnerComponent } from '@shared/components/spinner/spinner.component';
import { MyApplicationTypeDropdownFieldComponent } from '@shared/components/my-application-type-dropdown-field/my-application-type-dropdown-field.component';
import { MyApplicationsListComponent } from '../../components/my-applications-list/my-applications-list.component';
import { ErrorViewComponent } from '../../views/error-view/error-view.component';
import { TextLinkComponent } from '@shared/components/text-link/text-link.component';
import { PlaceholderComponent } from '@shared/components/placeholder/placeholder.component';

import { MyApplicationsPageService } from './my-applications-page.service';

import { MY_APPLICATION_TYPES_OPTIONS } from './my-applications-page.config';
import { UserState } from '@store/user';
import { User } from '@shared/types/user';
import { MyApplicationTypeOption } from '@shared/types/my-application-type-option';

@Component({
  selector: 'pu-my-applications-page',
  templateUrl: './my-applications-page.component.html',
  styleUrls: [
    '../../styles/_applications-page.component.scss',
    './my-applications-page.component.scss',
  ],
  providers: [MyApplicationsPageService],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    RouterLink,
    TranslateModule,
    SpinnerComponent,
    MyApplicationTypeDropdownFieldComponent,
    MyApplicationsListComponent,
    ErrorViewComponent,
    TextLinkComponent,
    PlaceholderComponent,
  ],
})
export class MyApplicationsPageComponent implements OnInit {
  private readonly _router = inject(Router);
  protected readonly _service = inject(MyApplicationsPageService);
  protected readonly _myApplicationTypesOptions = inject(
    MY_APPLICATION_TYPES_OPTIONS
  );

  protected readonly _selectedOption = signal(
    this._myApplicationTypesOptions[0]
  );

  @Select(UserState.stream)
  private readonly _user$!: Observable<User | null>;
  private readonly _user = toSignal(this._user$);
  private readonly _redirectTo404PageOnUserLogout = effect(() => {
    const user = this._user();

    if (user !== null) {
      return;
    }

    this._router.navigateByUrl('/find-application/requests');
  });

  public ngOnInit(): void {
    this._service.fetchAllMyApplications();
  }

  protected handleApplicationTypeOptionSelect(
    option: MyApplicationTypeOption
  ): void {
    if (this._selectedOption().equalsTo(option)) {
      return;
    }

    this._selectedOption.set(option);
    this._service.fetchAllMyApplications(option.type);
  }

  protected handleReload(): void {
    this._service.fetchAllMyApplications(this._selectedOption().type);
  }
}
