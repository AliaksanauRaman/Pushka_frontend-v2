import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';

import { UserState } from '@store/user';
import { User } from '@shared/types/user';

@Component({
  selector: 'pu-my-applications-page',
  templateUrl: './my-applications-page.component.html',
  styleUrls: ['./my-applications-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class MyApplicationsPageComponent {
  private readonly _router = inject(Router);

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
}
