import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: '[puPanelItem]',
  template: '<ng-content></ng-content>',
  styleUrl: './panel-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class PanelItemComponent {}
