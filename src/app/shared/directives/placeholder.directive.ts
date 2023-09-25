import { Directive, Input, signal } from '@angular/core';

@Directive({
  standalone: true,
})
export class PlaceholderDirective {
  @Input()
  public set puPlaceholder(value: string) {
    this.placeholder.set(value);
  }

  public readonly placeholder = signal('');
}
