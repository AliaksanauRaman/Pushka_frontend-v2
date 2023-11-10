import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'pu-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrl: './placeholder.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class PlaceholderComponent {}
