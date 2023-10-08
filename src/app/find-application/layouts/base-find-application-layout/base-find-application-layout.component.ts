import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'pu-base-find-application-layout',
  templateUrl: './base-find-application-layout.component.html',
  styleUrls: ['./base-find-application-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [RouterLink, RouterOutlet],
})
export class BaseFindApplicationLayoutComponent {}
