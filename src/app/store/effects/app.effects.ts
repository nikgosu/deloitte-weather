import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../state';
import { HttpApiService } from '../../services/http-api.service'
import { EAppActions, GetWeather, GetWeatherSuccess, SetWeatherFailure } from '../actions/app.actions'
import { catchError } from 'rxjs/internal/operators/catchError'
import { of } from 'rxjs/internal/observable/of'

@Injectable()
export class AppEffects {
  constructor(
    private _actions$: Actions,
    private _httpAPI: HttpApiService,
    private _store: Store<AppState>
  ) {
  }

  getWeather$ = createEffect(() => this._actions$.pipe(
    ofType<GetWeather>(EAppActions.GET_WEATHER),
    mergeMap(action =>
      this._httpAPI.getWeatherByCityName(action.payload).pipe(
        map(response => new GetWeatherSuccess(response.data[0])),
        catchError(error => of(new SetWeatherFailure(error))) // Handling errors
      )
    )
  ));
}
