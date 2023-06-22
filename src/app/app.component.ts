import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store'
import { selectIsLoading } from './store/selectors/app.selectors'
import { AppState } from './store/state'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Weather';
  isOpened = true
  isLoading$ = this._store.pipe(select(selectIsLoading))

  constructor(private _store: Store<AppState>) {
  }

  ngOnInit() {
    this.isOpened = !(window.innerWidth <= 800)
  }
  onResize(event: any) {
    this.isOpened = !(event.target.innerWidth <= 800);
  }
  handleMenuClick(event: boolean) {
    this.isOpened = event ? event : !this.isOpened
  }
}
