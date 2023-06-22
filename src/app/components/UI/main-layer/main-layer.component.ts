import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-layer',
  templateUrl: './main-layer.component.html',
  styleUrls: ['./main-layer.component.scss']
})
export class MainLayerComponent {
  @Input() isOpened = true

}
