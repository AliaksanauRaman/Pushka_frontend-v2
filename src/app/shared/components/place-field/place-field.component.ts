import {
  ChangeDetectionStrategy,
  Component,
  Input,
  forwardRef,
  inject,
} from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { OverlayModule, ScrollStrategyOptions } from '@angular/cdk/overlay';
import { map, tap } from 'rxjs';

import { PanelComponent } from '@shared/components/panel/panel.component';
import { PanelItemComponent } from '@shared/components/panel-item/panel-item.component';
import { IdDirective } from '@shared/directives/id.directive';
import { LabelDirective } from '@shared/directives/label.directive';
import { PlaceholderDirective } from '@shared/directives/placeholder.directive';

import { PlaceFieldService } from './place-field.service';

import { BaseDropdownFieldDirective } from '@shared/base/base-dropdown-field.directive';
import { TranslatedPlace } from '@shared/types/translated-place';
import { toSignal } from '@angular/core/rxjs-interop';
import { TranslateModule } from '@ngx-translate/core';
import { DisabledDirective } from '@shared/directives/disabled.directive';
import { TranslatedPlaceViewPipe } from '@shared/pipes/translated-place-view.pipe';

@Component({
  selector: 'pu-place-field',
  templateUrl: './place-field.component.html',
  styleUrls: [
    '../../../styles/components/_field.component.scss',
    './place-field.component.scss',
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PlaceFieldComponent),
      multi: true,
    },
    PlaceFieldService,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    NgOptimizedImage,
    OverlayModule,
    TranslateModule,
    DisabledDirective,
    PanelComponent,
    PanelItemComponent,
    TranslatedPlaceViewPipe,
  ],
  hostDirectives: [
    { directive: IdDirective, inputs: ['puId'] },
    { directive: LabelDirective, inputs: ['puLabel'] },
    { directive: PlaceholderDirective, inputs: ['puPlaceholder'] },
  ],
})
export class PlaceFieldComponent extends BaseDropdownFieldDirective<TranslatedPlace | null> {
  private readonly _scrollStrategyOptions = inject(ScrollStrategyOptions);
  protected readonly _service = inject(PlaceFieldService);
  protected readonly _idDirective = inject(IdDirective);
  protected readonly _labelDirective = inject(LabelDirective);

  @Input({ required: true })
  public set places(value: ReadonlyArray<TranslatedPlace>) {
    if (value.length === 0) {
      return;
    }

    this._service.handleAllPlacesSet(value);
  }

  protected readonly _state$ = this._service.state$.pipe(
    tap(({ isSelectedPlaceChange, current }) => {
      if (isSelectedPlaceChange) {
        this.onChange(current.selectedPlace);
      }
    }),
    map(({ current }) => current)
  );
  protected readonly _state = toSignal(this._state$);
  protected readonly _panelScrollStrategy = this._scrollStrategyOptions.block();

  public override writeValue(value: unknown): void {
    if (value !== null && !TranslatedPlace.is(value)) {
      throw new Error('A null or TranslatedPlace is expected!');
    }

    if (value === null) {
      this._service.handleWriteNull();
      return;
    }

    this._service.handleWritePlace(value);
  }

  protected selectPlace(place: TranslatedPlace): void {
    this._service.handlePlaceSelect(place);
    this.closePanel();
  }

  protected override closePanel(): void {
    super.closePanel();
    this.touchField();
  }
}
