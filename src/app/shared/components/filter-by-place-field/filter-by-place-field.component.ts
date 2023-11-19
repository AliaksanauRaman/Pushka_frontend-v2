import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  computed,
  inject,
  signal,
} from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';
import { TranslateModule } from '@ngx-translate/core';

import { DisabledDirective } from '@shared/directives/disabled.directive';
import { IconButtonComponent } from '@shared/components/icon-button/icon-button.component';
import { PanelComponent } from '@shared/components/panel/panel.component';
import { PanelItemComponent } from '@shared/components/panel-item/panel-item.component';
import { TranslatedPlaceViewPipe } from '@shared/pipes/translated-place-view.pipe';

import { PanelService } from '@shared/services/panel/panel.service';

import { TranslatedPlace } from '@shared/types/translated-place';
import { FilterByPlaceValue } from '@shared/types/filter-by-place-value';
import { filterPlaces } from '@shared/utils/filter-places';

@Component({
  selector: 'pu-filter-by-place-field',
  templateUrl: './filter-by-place-field.component.html',
  styleUrls: [
    '../../../styles/components/_field.component.scss',
    './filter-by-place-field.component.scss',
  ],
  providers: [PanelService],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    OverlayModule,
    TranslateModule,
    DisabledDirective,
    IconButtonComponent,
    PanelComponent,
    PanelItemComponent,
    TranslatedPlaceViewPipe,
  ],
})
export class FilterByPlaceFieldComponent {
  protected readonly _panel = inject(PanelService);

  @Input()
  public set value(value: FilterByPlaceValue) {
    this._value.set(value);
  }

  @Input()
  public set translatedPlaces(value: ReadonlyArray<TranslatedPlace>) {
    this._translatedPlaces.set(value);
  }

  @Output()
  public readonly valueChange = new EventEmitter<FilterByPlaceValue>();

  @Output()
  public readonly filter = new EventEmitter<void>();

  protected readonly _value = signal(new FilterByPlaceValue(null, null));
  protected readonly _translatedPlaces = signal<ReadonlyArray<TranslatedPlace>>(
    []
  );

  protected readonly _departurePlaceFieldViewValue = computed(() => {
    const value = this._value();

    if (value.departurePlace !== null) {
      return value.departurePlace.plainCityLabel;
    }

    return this._departurePlaceFieldValue();
  });
  protected readonly _filteredDeparturePlaces = computed(() =>
    filterPlaces(this._translatedPlaces(), this._departurePlaceFieldViewValue())
  );

  protected readonly _destinationFieldViewValue = computed(() => {
    const value = this._value();

    if (value.destination !== null) {
      return value.destination.plainCityLabel;
    }

    return this._destinationFieldValue();
  });
  protected readonly _filteredDestinations = computed(() =>
    filterPlaces(this._translatedPlaces(), this._destinationFieldViewValue())
  );

  protected _filteredPlaces = this._filteredDeparturePlaces;

  private readonly _departurePlaceFieldValue = signal('');
  private readonly _destinationFieldValue = signal('');

  protected handleDeparturePlaceFieldInput(value: string) {
    this._departurePlaceFieldValue.set(value);
    this.emitValueChange(this._value().withDeparturePlace(null));
  }

  protected handleDestinationFieldInput(value: string) {
    this._destinationFieldValue.set(value);
    this.emitValueChange(this._value().withDestination(null));
  }

  protected handleDeparturePlaceFieldFocus(): void {
    this._filteredPlaces = this._filteredDeparturePlaces;
    this._panel.open();
  }

  protected handleDestinationFieldFocus(): void {
    this._filteredPlaces = this._filteredDestinations;
    this._panel.open();
  }

  protected selectPlace(place: TranslatedPlace): void {
    if (this.checkIsDeparturePlaceActive()) {
      this._panel.close();
      this.emitValueChange(this._value().withDeparturePlace(place));
      return;
    }

    if (this.checkIsDestinationActive()) {
      this._panel.close();
      this.emitValueChange(this._value().withDestination(place));
      return;
    }

    throw new Error('No place is active!');
  }

  protected applyFilter(): void {
    this._panel.close();
    this.filter.emit();
  }

  private emitValueChange(newValue: FilterByPlaceValue): void {
    if (this._value().equalsTo(newValue)) {
      return;
    }

    this.valueChange.emit(newValue);
  }

  private checkIsDeparturePlaceActive(): boolean {
    return this._filteredPlaces === this._filteredDeparturePlaces;
  }

  private checkIsDestinationActive(): boolean {
    return this._filteredPlaces === this._filteredDestinations;
  }
}
