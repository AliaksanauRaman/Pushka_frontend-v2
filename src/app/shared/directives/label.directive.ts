import { Directive, Input, signal } from '@angular/core';

@Directive({
  standalone: true,
})
export class LabelDirective {
  @Input()
  public set puLabel(value: string) {
    this.label.set(value);
  }

  public readonly label = signal('');
}
