import { Directive, Input, signal } from '@angular/core';

type AutocompleteValue =
  | 'on'
  | 'off'
  | 'name'
  | 'new-password'
  | 'current-password'
  | 'email'
  | 'tel-local';

@Directive({
  standalone: true,
})
export class AutocompleteDirective {
  @Input()
  public set puAutocomplete(value: AutocompleteValue) {
    this.value.set(value);
  }

  public readonly value = signal<AutocompleteValue>('on');
}
