import {
  ChangeDetectionStrategy,
  Component,
  Input,
  forwardRef,
  inject,
} from '@angular/core';
import { AsyncPipe, NgIf, NgFor } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';
import {
  CdkListboxModule,
  ListboxValueChangeEvent,
} from '@angular/cdk/listbox';
import { tap } from 'rxjs';

import { IdDirective } from '@shared/directives/id.directive';
import { LabelDirective } from '@shared/directives/label.directive';
import { PlaceholderDirective } from '@shared/directives/placeholder.directive';

import { PlaceFieldService } from './place-field.service';

import { BaseDropdownFieldDirective } from '@shared/base/base-dropdown-field.directive';
import { Place } from '@shared/types/place';

@Component({
  selector: 'pu-place-field',
  templateUrl: './place-field.component.html',
  styleUrls: ['./place-field.component.scss'],
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
  imports: [NgIf, NgFor, AsyncPipe, OverlayModule, CdkListboxModule],
  hostDirectives: [
    { directive: IdDirective, inputs: ['puId'] },
    { directive: LabelDirective, inputs: ['puLabel'] },
    { directive: PlaceholderDirective, inputs: ['puPlaceholder'] },
  ],
})
export class PlaceFieldComponent extends BaseDropdownFieldDirective<Place | null> {
  @Input({ required: true })
  public set places(value: ReadonlyArray<Place>) {
    if (value.length === 0) {
      return;
    }

    this._service.handlePlacesSet(value);
  }

  protected readonly _service = inject(PlaceFieldService);
  protected readonly _idDirective = inject(IdDirective);
  protected readonly _labelDirective = inject(LabelDirective);
  protected readonly _state$ = this._service.state$.pipe(
    tap(({ isSelectedPlaceChange, next }) => {
      if (isSelectedPlaceChange) {
        this.onChange(next.selectedPlace);
      }
    })
  );

  public override writeValue(value: unknown): void {
    if (value !== null && !Place.is(value)) {
      throw new Error('A null or Place is expected!');
    }

    if (value === null) {
      this._service.handleWriteNull();
      return;
    }

    this._service.handleWritePlace(value);
  }

  protected handleListboxValueChange(
    event: ListboxValueChangeEvent<unknown>
  ): void {
    const selectedPlace = event.value[0];

    if (!Place.is(selectedPlace)) {
      throw new Error('A Place is expected!');
    }

    this._service.handlePlaceSelect(selectedPlace);
    this.closePanel();
  }

  protected trackByPlaceId(_: number, place: Place): number {
    return place.id;
  }
}
