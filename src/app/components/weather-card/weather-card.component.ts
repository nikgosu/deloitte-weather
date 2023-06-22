import { Component, OnInit } from '@angular/core';
import { AppState } from '../../store/state'
import { select, Store } from '@ngrx/store'
import { selectCurrentCityWeather, selectError } from '../../store/selectors/app.selectors'
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent implements OnInit{

  currentWeather$ = this._store.pipe(select(selectCurrentCityWeather))
  error$ = this._store.pipe(select(selectError))

  constructor(
    private _store: Store<AppState>,
    private _snackBar: MatSnackBar
  ) {
  }

  ngOnInit(): void {
    this.error$.subscribe(error => {
      error && this._snackBar.open(error, 'Close', {
        panelClass: ['error-snackbar'],
        horizontalPosition: 'right',
        verticalPosition: 'bottom',
      });
    })
  }
}
