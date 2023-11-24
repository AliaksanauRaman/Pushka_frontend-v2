import { Directive, Input, signal } from '@angular/core';

@Directive({
  standalone: true,
})
export class NameDirective {
  @Input()
  public set puName(value: string) {
    this.value.set(value);
  }

  public readonly value = signal('');
}
