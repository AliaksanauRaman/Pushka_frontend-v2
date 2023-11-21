import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { NAVIGATION_LINKS } from './navigation.config';

@Component({
  selector: 'nav[puNavigation]',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [RouterLink, RouterLinkActive, TranslateModule],
})
export class NavigationComponent {
  protected readonly _navigationLinks = inject(NAVIGATION_LINKS);
}
