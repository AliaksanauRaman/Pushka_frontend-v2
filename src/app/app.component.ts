import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'pu-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class AppComponent {}
