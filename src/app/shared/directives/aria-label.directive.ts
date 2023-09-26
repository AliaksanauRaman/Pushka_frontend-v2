import { Directive, Input, signal } from '@angular/core';

@Directive({
  standalone: true,
})
export class AriaLabelDirective {
  @Input({ required: true })
  public set puAriaLabel(value: string) {
    this.ariaLabel.set(value);
  }

  public readonly ariaLabel = signal('');
}
