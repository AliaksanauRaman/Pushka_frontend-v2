import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';

@Component({
  selector: 'button[puSecondaryButton]',
  templateUrl: './secondary-button.component.html',
  styleUrls: ['./secondary-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class SecondaryButtonComponent {
  @HostBinding('attr.type')
  public get type(): 'button' {
    return 'button';
  }
}
