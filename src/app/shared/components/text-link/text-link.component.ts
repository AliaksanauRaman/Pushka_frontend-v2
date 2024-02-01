import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  signal,
} from '@angular/core';

@Component({
  selector: 'a[puTextLink]',
  template: `<ng-content></ng-content>`,
  styleUrl: './text-link.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class TextLinkComponent {
  @Input()
  public set isDim(value: boolean) {
    this._isDim.set(value);
  }

  @HostBinding('class.text-link--dim')
  public get hasTextLinkDimClass(): boolean {
    return this._isDim();
  }

  private readonly _isDim = signal(false);
}
