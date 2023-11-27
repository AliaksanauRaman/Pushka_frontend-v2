import { Injectable, inject } from '@angular/core';
import {
  State,
  StateContext,
  Action,
  Actions,
  ofAction,
  Selector,
  NgxsOnInit,
} from '@ngxs/store';
import { Observable, catchError, takeUntil, tap, throwError } from 'rxjs';

import { PlacesHttpService } from '@shared/http/places/places-http.service';
import { SnackBarService } from '@shared/services/snack-bar/snack-bar.service';

import { GetPlaces, DestroyGetPlaces } from './places.actions';
import { Place } from '@shared/types/place';

type StateModel = Readonly<{
  places: ReadonlyArray<Place>;
  getError: unknown;
}>;

@State<StateModel>({
  name: 'places',
  defaults: {
    places: [],
    getError: null,
  },
})
@Injectable({
  providedIn: 'root',
})
export class PlacesState implements NgxsOnInit {
  private readonly _placesHttpService = inject(PlacesHttpService);
  private readonly _snackBarService = inject(SnackBarService);
  private readonly _actions$ = inject(Actions);

  @Selector()
  public static places(state: StateModel): ReadonlyArray<Place> {
    return state.places;
  }

  public ngxsOnInit(context: StateContext<StateModel>): void {
    context.dispatch(new GetPlaces());
  }

  @Action(GetPlaces, { cancelUncompleted: true })
  public getPlaces(
    context: StateContext<StateModel>
  ): Observable<ReadonlyArray<Place>> {
    return this._placesHttpService.getAll().pipe(
      tap((places) => context.setState({ places, getError: null })),
      catchError((error: unknown) => {
        context.setState({ places: [], getError: error });
        this._snackBarService.showErrorMessage(
          'backendError.unknownPlacesError'
        );
        return throwError(() => error);
      }),
      takeUntil(this._actions$.pipe(ofAction(DestroyGetPlaces)))
    );
  }
}
