import { Component, Input } from '@angular/core';
import { ThemePalette } from '@angular/material/core'
import { ProgressSpinnerMode } from '@angular/material/progress-spinner'

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {
  @Input() isLoading = false
  color: ThemePalette = 'accent';
  mode: ProgressSpinnerMode = 'indeterminate';
  value = 50;
}
