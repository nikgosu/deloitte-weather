import { CityWeatherInfo } from '../../models'

export interface WeatherState {
  currentCityWeather: CityWeatherInfo | null
  isLoading: boolean
  error: string
}

export interface AppState {
  weather: WeatherState
}
