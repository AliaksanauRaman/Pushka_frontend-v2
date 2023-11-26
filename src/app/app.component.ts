import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { UnderTestingDialogHelperService } from '@core/services/under-testing-dialog-helper/under-testing-dialog-helper.service';

@Component({
  selector: 'pu-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [RouterOutlet],
})
export class AppComponent implements OnInit {
  private readonly _underTestingDialogHelper = inject(
    UnderTestingDialogHelperService
  );

  public ngOnInit(): void {
    this._underTestingDialogHelper.openDialogIfNotViewed();
  }
}
