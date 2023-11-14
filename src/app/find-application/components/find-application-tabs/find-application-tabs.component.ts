import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Select } from '@ngxs/store';
import { TranslateModule } from '@ngx-translate/core';
import { Observable } from 'rxjs';

import { ALL_FIND_APPLICATION_LINKS } from './find-application-tabs.config';
import { UserState } from '@store/user';
import { User } from '@shared/types/user';

@Component({
  selector: 'pu-find-application-tabs',
  templateUrl: './find-application-tabs.component.html',
  styleUrls: ['./find-application-tabs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [RouterLink, RouterLinkActive, TranslateModule],
})
export class FindApplicationTabsComponent {
  private readonly _allLinks = inject(ALL_FIND_APPLICATION_LINKS);

  @Select(UserState.stream)
  private readonly _user$!: Observable<User | null>;
  private readonly _user = toSignal(this._user$);
  protected readonly _visibleLinks = computed(() => {
    const user = this._user();

    if (user === null) {
      return this._allLinks.slice(0, 2);
    }

    return this._allLinks;
  });
}
