import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
  inject,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { PwaService } from '@shared/services/pwa/pwa.service';

@Component({
  selector: 'pu-root',
  template: '<router-outlet></router-outlet>',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [RouterOutlet],
})
export class AppComponent implements OnInit, OnDestroy {
  private readonly _pwaService = inject(PwaService);

  public ngOnInit(): void {
    this._pwaService.subToVersionUpdates();
    this._pwaService.subToUnrecoverable();
  }

  public ngOnDestroy(): void {
    this._pwaService.destroySubscriptions();
  }
}
