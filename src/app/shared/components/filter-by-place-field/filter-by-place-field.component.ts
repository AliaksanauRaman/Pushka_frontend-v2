import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  effect,
  inject,
} from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';
import { TranslateModule } from '@ngx-translate/core';

import { DisabledDirective } from '@shared/directives/disabled.directive';
import { IconButtonComponent } from '@shared/components/icon-button/icon-button.component';
import { PanelComponent } from '@shared/components/panel/panel.component';
import { PanelItemComponent } from '@shared/components/panel-item/panel-item.component';
import { TranslatedPlaceViewPipe } from '@shared/pipes/translated-place-view.pipe';

import { FilterByPlaceFieldService } from './filter-by-place-field.service';
import { PanelService } from '@shared/services/panel/panel.service';

import { TranslatedPlace } from '@shared/types/translated-place';
import { FilterByPlaceValue } from '@shared/types/filter-by-place-value';

@Component({
  selector: 'pu-filter-by-place-field',
  templateUrl: './filter-by-place-field.component.html',
  styleUrls: [
    '../../../styles/components/_field.component.scss',
    './filter-by-place-field.component.scss',
  ],
  providers: [FilterByPlaceFieldService, PanelService],
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
  protected readonly _service = inject(FilterByPlaceFieldService);
  protected readonly _panel = inject(PanelService);

  private readonly _emitOnValueChange = effect(() =>
    this.valueChange.emit(this._service.value())
  );

  @Input()
  public set value(value: FilterByPlaceValue) {
    this._service.setValue(value);
  }

  @Output()
  public readonly valueChange = new EventEmitter<FilterByPlaceValue>();

  @Output()
  public readonly filter = new EventEmitter<void>();

  protected handleDeparturePlaceFieldFocus(): void {
    this._service.switchToDeparturePlace();
    this._panel.open();
  }

  protected handleDestinationFieldFocus(): void {
    this._service.switchToDestination();
    this._panel.open();
  }

  protected selectPlace(place: TranslatedPlace): void {
    this._service.handlePlaceSelect(place);
    this._panel.close();
  }

  protected applyFilter(): void {
    this._panel.close();
    this.filter.emit();
  }
}
