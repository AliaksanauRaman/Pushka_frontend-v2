import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'pu-panel',
  template: '<ng-content></ng-content>',
  styleUrl: './panel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class PanelComponent {}
