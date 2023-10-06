import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'pu-successful-user-activation-view',
  templateUrl: './successful-user-activation-view.component.html',
  styleUrls: ['./successful-user-activation-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class SuccessfulUserActivationViewComponent {}
