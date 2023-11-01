import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'a[puTextLink]',
  templateUrl: './text-link.component.html',
  styleUrls: ['./text-link.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class TextLinkComponent {}
