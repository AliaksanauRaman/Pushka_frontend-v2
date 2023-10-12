import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ToolbarComponent } from '@core/components/toolbar/toolbar.component';
import { RepresentationComponent } from '@core/components/representation/representation.component';

@Component({
  selector: 'pu-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [ToolbarComponent, RepresentationComponent],
})
export class HeaderComponent {}
