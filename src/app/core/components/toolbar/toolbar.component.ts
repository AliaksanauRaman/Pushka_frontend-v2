import { ChangeDetectionStrategy, Component } from '@angular/core';

import { IconButtonComponent } from '@shared/components/icon-button/icon-button.component';

@Component({
  selector: 'pu-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [IconButtonComponent],
})
export class ToolbarComponent {}
