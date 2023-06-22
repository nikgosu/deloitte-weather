import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ENVIRONMENT } from '../../environment'
import { WeatherByCityResponse, WeatherRequestParams } from '../models'

@Injectable({
  providedIn: 'root'
})
export class HttpApiService {

  constructor(private http: HttpClient) {
  }

  getWeatherByCityName(params: WeatherRequestParams) {
    return this.http.get<WeatherByCityResponse>(ENVIRONMENT.api + ENVIRONMENT.apiKey, { params: {city: params.city, units: params.units}})
  }
}
