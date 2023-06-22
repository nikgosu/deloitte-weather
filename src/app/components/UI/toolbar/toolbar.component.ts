import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Output() onMenuClick = new EventEmitter()
  isMobile = false

  ngOnInit() {
    this.isMobile = (window.innerWidth <= 800);
  }

  onResize(event: any) {
    this.isMobile = (event.target.innerWidth <= 800);
  }
}
