import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'pu-find-application-page',
  templateUrl: './find-application-page.component.html',
  styleUrls: ['./find-application-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class FindApplicationPageComponent {}
