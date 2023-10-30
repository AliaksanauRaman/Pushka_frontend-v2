import { Directive, inject, signal } from '@angular/core';

import { PlaceholderDirective } from '@shared/directives/placeholder.directive';

import { BaseReactiveFieldWithErrorsDirective } from './base-reactive-field-with-errors.directive';

@Directive()
export abstract class BaseDropdownFieldDirective<
  T
> extends BaseReactiveFieldWithErrorsDirective<T> {
  protected readonly _placeholderDirective = inject(PlaceholderDirective);
  protected readonly _isPanelOpened = signal(false);

  protected openPanel(): void {
    this._isPanelOpened.set(true);
  }

  protected closePanel(): void {
    this._isPanelOpened.set(false);
  }

  protected togglePanel(): void {
    if (this._isPanelOpened()) {
      this.closePanel();
    } else {
      this.openPanel();
    }
  }
}
