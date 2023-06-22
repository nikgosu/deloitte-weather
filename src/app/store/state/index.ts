import { CityWeatherInfo } from '../../models'
import { HttpErrorResponse } from '@angular/common/http'

export interface WeatherState {
  currentCityWeather: CityWeatherInfo | null
  isLoading: boolean
  error: HttpErrorResponse | null
}

export interface AppState {
  weather: WeatherState
}
