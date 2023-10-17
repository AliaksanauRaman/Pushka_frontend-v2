import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';

import { ToolbarComponent } from '@core/components/toolbar/toolbar.component';

@Component({
  selector: 'aside[puSideMenu]',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [ToolbarComponent],
})
export class SideMenuComponent {
  @Output()
  public readonly closeClick = new EventEmitter<void>();
}
