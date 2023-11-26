import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { AccentButtonComponent } from '@shared/components/accent-button/accent-button.component';

@Component({
  selector: 'pu-not-found-page',
  templateUrl: './not-found-page.component.html',
  styleUrls: ['./not-found-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [RouterLink, TranslateModule, AccentButtonComponent],
})
export class NotFoundPageComponent {}
