import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'pu-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class FooterComponent {}
