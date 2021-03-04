import { Component, Input } from '@angular/core';

@Component({
  selector: 'sk-brand',
  templateUrl: 'brand.component.html'
})
export class SkBrandComponent {
  @Input() route?: string;
}
