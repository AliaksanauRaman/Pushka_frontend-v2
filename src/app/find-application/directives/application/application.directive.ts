import { Directive, Input, signal } from '@angular/core';

import { Application } from '@shared/types/application';

@Directive({
  standalone: true,
})
export class ApplicationDirective<T extends Application> {
  @Input({ required: true })
  public set application(value: T) {
    this.value.set(value);
  }

  public readonly value = signal<T | null>(null);
}
