import { Action } from '@ngrx/store';
import { CityWeatherInfo } from '../../models'

export enum EAppActions {
  GET_WEATHER = '[APP] Get Cats',
  GET_WEATHER_SUCCESS = '[APP] Get Cats Success',
  SET_IS_LOADING = '[APP] Set Is Loading',
  SET_ERROR = '[APP] Set Error',
}

export class GetWeather implements Action {
  public readonly type = EAppActions.GET_WEATHER

  constructor(public payload: any) {
  }
}

export class GetWeatherSuccess implements Action {
  public readonly type = EAppActions.GET_WEATHER_SUCCESS

  constructor(public payload: CityWeatherInfo) {
  }
}

export class SetIsLoading implements Action {
  public readonly type = EAppActions.SET_IS_LOADING

  constructor(public payload: boolean) {
  }
}

export class SetWeatherFailure implements Action {
  public readonly type = EAppActions.SET_ERROR

  constructor(public payload: string) {
  }
}

export type AppActions = GetWeather | GetWeatherSuccess | SetIsLoading | SetWeatherFailure
