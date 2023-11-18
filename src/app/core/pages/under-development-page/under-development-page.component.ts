import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'pu-under-development-page',
  templateUrl: './under-development-page.component.html',
  styleUrl: './under-development-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgTemplateOutlet]
})
export class UnderDevelopmentPageComponent {}
