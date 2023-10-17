import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'pu-application-card-user-details',
  templateUrl: './application-card-user-details.component.html',
  styleUrls: ['./application-card-user-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgOptimizedImage],
})
export class ApplicationCardUserDetailsComponent {}
