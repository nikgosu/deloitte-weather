import { WeatherState } from '../state';
import { AppActions, EAppActions } from '../actions/app.actions'
import { initialWeatherState } from '../state/weather.state'

export const weatherReducers = (state = initialWeatherState, action: AppActions): WeatherState => {
  switch (action.type) {
    case EAppActions.GET_WEATHER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        currentCityWeather: action.payload
      }
    }
    case EAppActions.SET_IS_LOADING: {
      return {
        ...state,
        isLoading: action.payload
      }
    }
    case EAppActions.SET_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    }
    default:
      return state
  }
}
