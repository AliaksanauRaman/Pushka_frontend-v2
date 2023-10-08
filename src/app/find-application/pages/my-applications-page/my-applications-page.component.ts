import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'pu-my-applications-page',
  templateUrl: './my-applications-page.component.html',
  styleUrls: ['./my-applications-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class MyApplicationsPageComponent {}
