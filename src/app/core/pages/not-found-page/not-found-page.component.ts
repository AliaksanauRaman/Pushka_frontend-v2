import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'pu-not-found-page',
  templateUrl: './not-found-page.component.html',
  styleUrls: ['./not-found-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class NotFoundPageComponent {}
