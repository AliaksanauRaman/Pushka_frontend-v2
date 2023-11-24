import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'pu-dialog-tabs',
  template: '<ng-content></ng-content>',
  styleUrl: './dialog-tabs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class DialogTabsComponent {}
