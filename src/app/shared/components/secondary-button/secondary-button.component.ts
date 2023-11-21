import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'button[puSecondaryButton]',
  template: '<ng-content></ng-content>',
  styleUrl: './secondary-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class SecondaryButtonComponent {}
