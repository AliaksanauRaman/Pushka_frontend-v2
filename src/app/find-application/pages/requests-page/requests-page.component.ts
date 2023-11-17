import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { HelpRequestsListComponent } from '../../components/help-requests-list/help-requests-list.component';
import { SpinnerComponent } from '@shared/components/spinner/spinner.component';
import { FilterByPlaceFieldComponent } from '@shared/components/filter-by-place-field/filter-by-place-field.component';

import { RequestsPageService } from './requests-page.service';

@Component({
  selector: 'pu-requests-page',
  templateUrl: './requests-page.component.html',
  styleUrls: ['../../styles/_applications-page.component.scss'],
  providers: [RequestsPageService],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    NgOptimizedImage,
    TranslateModule,
    HelpRequestsListComponent,
    SpinnerComponent,
    FilterByPlaceFieldComponent,
  ],
})
export class RequestsPageComponent {
  protected readonly _service = inject(RequestsPageService);

  public ngOnInit(): void {
    this._service.fetchPublishedHelpRequests();
  }
}
