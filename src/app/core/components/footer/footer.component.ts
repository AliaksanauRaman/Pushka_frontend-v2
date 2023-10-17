import { ChangeDetectionStrategy, Component } from '@angular/core';

import { IconButtonComponent } from '@shared/components/icon-button/icon-button.component';

@Component({
  selector: 'footer[puFooter]',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [IconButtonComponent],
})
export class FooterComponent {}
