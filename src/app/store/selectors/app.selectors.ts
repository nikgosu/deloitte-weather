import { AppState, WeatherState } from '../state'
import { createSelector } from '@ngrx/store'

const selectWeather = (state: AppState) => {
  return state.weather
}

export const selectCurrentCityWeather = createSelector(
  selectWeather,
  (state: WeatherState) => state.currentCityWeather
)

export const selectIsLoading = createSelector(
  selectWeather,
  (state: WeatherState) => state.isLoading
)

export const selectError = createSelector(
  selectWeather,
  (state: WeatherState) => state.error
)
