import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'pu-dialog-tabs',
  template: '<ng-content></ng-content>',
  styles: [
    `
      :host {
        display: flex;
        align-items: flex-end;
        height: 48px;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class DialogTabsComponent {}
