import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'pu-representation',
  templateUrl: './representation.component.html',
  styleUrls: ['./representation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class RepresentationComponent {}
