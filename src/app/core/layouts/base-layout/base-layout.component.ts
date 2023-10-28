import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgIf } from '@angular/common';

import { ToolbarComponent } from '@core/components/toolbar/toolbar.component';
import { RepresentationComponent } from '@core/components/representation/representation.component';
import { NavigationComponent } from '@core/components/navigation/navigation.component';
import { MainComponent } from '@core/components/main/main.component';
import { FooterComponent } from '@core/components/footer/footer.component';

@Component({
  selector: 'pu-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    NgIf,
    ToolbarComponent,
    RepresentationComponent,
    NavigationComponent,
    MainComponent,
    FooterComponent,
  ],
})
export class BaseLayoutComponent {}
