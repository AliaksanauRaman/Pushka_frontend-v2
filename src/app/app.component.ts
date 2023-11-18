import { ChangeDetectionStrategy, Component } from '@angular/core';

import { UnderDevelopmentPageComponent } from '@core/pages/under-development-page/under-development-page.component';

@Component({
  selector: 'pu-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [UnderDevelopmentPageComponent],
})
export class AppComponent {}
