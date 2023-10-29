import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'button[puAccentButton]',
  templateUrl: './accent-button.component.html',
  styleUrls: ['./accent-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class AccentButtonComponent {}
