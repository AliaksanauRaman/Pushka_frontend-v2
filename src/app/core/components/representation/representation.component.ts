import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'pu-representation',
  templateUrl: './representation.component.html',
  styleUrls: ['./representation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgOptimizedImage],
})
export class RepresentationComponent {}
