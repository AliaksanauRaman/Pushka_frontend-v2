import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { FIND_APPLICATION_TABS_LINKS } from './find-application-tabs.config';

@Component({
  selector: 'pu-find-application-tabs',
  templateUrl: './find-application-tabs.component.html',
  styleUrls: ['./find-application-tabs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgFor, RouterLink, RouterLinkActive, TranslateModule],
})
export class FindApplicationTabsComponent {
  protected readonly _links = inject(FIND_APPLICATION_TABS_LINKS);
}
