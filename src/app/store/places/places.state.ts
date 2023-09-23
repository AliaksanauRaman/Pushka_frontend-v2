import { Injectable, inject } from '@angular/core';
import {
  State,
  StateContext,
  Action,
  Actions,
  ofAction,
  Selector,
} from '@ngxs/store';
import { Observable, catchError, takeUntil, tap } from 'rxjs';

import { PlacesHttpService } from '@shared/http/places/places-http.service';

import { GetAllPlaces, DestroyGetAllPlaces } from './places.actions';
import { Place } from '@shared/types/place';
import {
  HttpRequestState,
  NotMadeHttpRequest,
  LoadingHttpRequest,
  SuccessHttpRequest,
  FailedHttpRequest,
} from '@shared/types/http-request-state';

type StateModel = Readonly<{
  getAll: HttpRequestState<ReadonlyArray<Place>>;
}>;

@State<StateModel>({
  name: 'places',
  defaults: {
    getAll: new NotMadeHttpRequest(),
  },
})
@Injectable({
  providedIn: 'root',
})
export class PlacesState {
  private readonly _placesHttpService = inject(PlacesHttpService);
  private readonly _actions$ = inject(Actions);

  @Selector()
  public static getAll(
    state: StateModel
  ): HttpRequestState<ReadonlyArray<Place>> {
    return state.getAll;
  }

  @Action(GetAllPlaces, { cancelUncompleted: true })
  public getAllPlaces(
    context: StateContext<StateModel>
  ): Observable<ReadonlyArray<Place>> {
    context.setState({
      getAll: new LoadingHttpRequest(),
    });

    return this._placesHttpService.getAll().pipe(
      tap((places) =>
        context.setState({ getAll: new SuccessHttpRequest(places) })
      ),
      catchError((error: unknown) => {
        context.setState({ getAll: new FailedHttpRequest(error) });
        throw error;
      }),
      takeUntil(this._actions$.pipe(ofAction(DestroyGetAllPlaces)))
    );
  }
}
