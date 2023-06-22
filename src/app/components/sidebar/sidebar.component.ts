import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppState } from '../../store/state'
import { Store } from '@ngrx/store'
import { FormBuilder } from '@angular/forms'
import { Subject } from 'rxjs/internal/Subject'
import { takeUntil } from 'rxjs/internal/operators/takeUntil'
import { GetWeather, SetIsLoading } from '../../store/actions/app.actions'
import { CITIES, UNITS } from '../../consts'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {

  cities = CITIES
  units = UNITS
  form = this._formBuilder.group<any>({
    currentCity: 'Odessa',
    units: 'M'
  })
  private unsubscribe$ = new Subject<void>();

  constructor(private _store: Store<AppState>, private _formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.getWeather()
    this.form.valueChanges.pipe(takeUntil(this.unsubscribe$)).subscribe(() => {
      this.getWeather()
    })
  }

  getWeather() {
    this._store.dispatch(new SetIsLoading(true))
    this._store.dispatch(new GetWeather({
      city: this.form.get('currentCity')?.value,
      units: this.form.get('units')?.value
    }))
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next()
    this.unsubscribe$.complete()
  }
}
