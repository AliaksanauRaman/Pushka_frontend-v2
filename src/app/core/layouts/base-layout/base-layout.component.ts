import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { NgIf } from '@angular/common';
import { animate, style, transition, trigger } from '@angular/animations';

import { ToolbarComponent } from '@core/components/toolbar/toolbar.component';
import { SideMenuComponent } from '@core/components/side-menu/side-menu.component';
import { RepresentationComponent } from '@core/components/representation/representation.component';
import { NavigationComponent } from '@core/components/navigation/navigation.component';
import { MainComponent } from '@core/components/main/main.component';
import { FooterComponent } from '@core/components/footer/footer.component';

import { ScrollingService } from '@shared/services/scrolling/scrolling.service';

@Component({
  selector: 'pu-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    NgIf,
    ToolbarComponent,
    SideMenuComponent,
    RepresentationComponent,
    NavigationComponent,
    MainComponent,
    FooterComponent,
  ],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ left: '100%' }),
        animate('300ms ease-in-out', style({ left: '0%' })),
      ]),
      transition(
        ':leave',
        animate('300ms ease-in-out', style({ left: '100%' }))
      ),
    ]),
  ],
})
export class BaseLayoutComponent {
  private readonly _scrollingService = inject(ScrollingService);

  protected readonly _isSideMenuOpened = signal(false);

  protected openSideMenu(): void {
    this._isSideMenuOpened.set(true);
    this._scrollingService.disablePageScrolling();
  }

  protected closeSideMenu(): void {
    this._isSideMenuOpened.set(false);
    this._scrollingService.enablePageScrolling();
  }
}
