import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { ErrorViewComponent } from '../../views/error-view/error-view.component';
import { HelpRequestsListComponent } from '../../components/help-requests-list/help-requests-list.component';
import { SpinnerComponent } from '@shared/components/spinner/spinner.component';
import { TextLinkComponent } from '@shared/components/text-link/text-link.component';
import { FilterByPlaceFieldQueryContainerComponent } from '@shared/components/filter-by-place-field-query-container/filter-by-place-field-query-container.component';
import { PlaceholderComponent } from '@shared/components/placeholder/placeholder.component';

import { RequestsPageService } from './requests-page.service';

@Component({
  selector: 'pu-requests-page',
  templateUrl: './requests-page.component.html',
  styleUrl: '../../styles/_applications-page.component.scss',
  providers: [RequestsPageService],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    RouterLink,
    TranslateModule,
    ErrorViewComponent,
    HelpRequestsListComponent,
    SpinnerComponent,
    TextLinkComponent,
    FilterByPlaceFieldQueryContainerComponent,
    PlaceholderComponent,
  ],
})
export class RequestsPageComponent {
  protected readonly _service = inject(RequestsPageService);

  public ngOnInit(): void {
    this._service.fetchPublishedHelpRequests();
  }
}
