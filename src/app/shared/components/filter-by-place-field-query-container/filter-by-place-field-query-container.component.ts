import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
  computed,
  inject,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';

import { FilterByPlaceFieldComponent } from '@shared/components/filter-by-place-field/filter-by-place-field.component';

import { FilterByPlaceQueryService } from '@shared/services/filter-by-place-query/filter-by-place-query.service';
import { PlacesService } from '@shared/services/places/places.service';

import { FilterByPlaceValue } from '@shared/types/filter-by-place-value';

@Component({
  selector: 'pu-filter-by-place-field-query-container',
  templateUrl: './filter-by-place-field-query-container.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [FilterByPlaceFieldComponent],
})
export class FilterByPlaceFieldQueryContainerComponent {
  private readonly _activatedRoute = inject(ActivatedRoute);
  private readonly _filterByPlaceQueryService = inject(
    FilterByPlaceQueryService
  );
  protected readonly _translatedPlaces = toSignal(
    inject(PlacesService).translatedPlaces$
  );

  private readonly _queryParams = toSignal(this._activatedRoute.queryParams);

  @Output()
  public readonly applyFilter = new EventEmitter<void>();

  protected readonly _filterValue = computed(() => {
    const translatedPlaces = this._translatedPlaces();
    const query = this._queryParams();

    if (query === undefined || translatedPlaces === undefined) {
      return new FilterByPlaceValue(null, null);
    }

    return this._filterByPlaceQueryService.getValueFromQuery(
      query,
      translatedPlaces
    );
  });

  public clearFilter(): void {
    this._filterByPlaceQueryService
      .clearQuery(this._activatedRoute)
      .finally(() => this.applyFilter.emit());
  }

  protected handleFilterValueChange(value: FilterByPlaceValue): void {
    this._filterByPlaceQueryService.updateQuery(this._activatedRoute, value);
  }
}
