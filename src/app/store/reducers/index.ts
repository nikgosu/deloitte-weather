import { ActionReducerMap } from '@ngrx/store'
import { AppState } from '../state'
import { weatherReducers } from './weather.reducers'

export const appReducers: ActionReducerMap<AppState, any> = {
  weather: weatherReducers
}
