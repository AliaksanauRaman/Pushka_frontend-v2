import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { FindApplicationTabsComponent } from '../../components/find-application-tabs/find-application-tabs.component';

@Component({
  selector: 'pu-base-find-application-layout',
  templateUrl: './base-find-application-layout.component.html',
  styleUrls: ['./base-find-application-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [FindApplicationTabsComponent, RouterOutlet],
})
export class BaseFindApplicationLayoutComponent {}
