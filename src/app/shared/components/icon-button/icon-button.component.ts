import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  inject,
  numberAttribute,
} from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

import { AriaLabelDirective } from '@shared/directives/aria-label.directive';

@Component({
  selector: 'button[puIconButton]',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgOptimizedImage],
  hostDirectives: [
    {
      directive: AriaLabelDirective,
      inputs: ['puAriaLabel'],
    },
  ],
})
export class IconButtonComponent {
  private readonly _ariaLabelDirective = inject(AriaLabelDirective);

  @HostBinding('attr.type')
  public get type(): string {
    return 'button';
  }

  @HostBinding('attr.aria-label')
  public get ariaLabel(): string {
    return this._ariaLabelDirective.ariaLabel();
  }

  @Input({ required: true })
  public set puIconSrc(value: string) {
    this._iconSrc = value;
  }

  @Input({ required: true })
  public set puIconAlt(value: string) {
    this._iconAlt = value;
  }

  @Input({ transform: numberAttribute })
  public set puIconWidth(value: number) {
    this._iconWidth = value;
  }

  @Input({ transform: numberAttribute })
  public set puIconHeight(value: number) {
    this._iconHeight = value;
  }

  protected _iconSrc = '';
  protected _iconAlt = '';
  protected _iconWidth = 24;
  protected _iconHeight = 24;
}
