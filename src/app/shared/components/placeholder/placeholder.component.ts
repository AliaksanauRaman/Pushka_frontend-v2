import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'pu-placeholder',
  template: '',
  styles: `
    @import '../../../styles/_screen-size-mixins.scss';

    :host {
      display: block;
      background: #D9D9D9;
      border-radius: 12px;
    }

    @include for-laptop {
      :host {
        border-radius: 16px;
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class PlaceholderComponent {}
