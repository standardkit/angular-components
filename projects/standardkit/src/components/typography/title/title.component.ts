import { Component, Input } from '@angular/core';

@Component({
  selector: 'sk-title',
  templateUrl: 'title.component.html'
})
export class SkTitleComponent {
  @Input() heading: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' = 'h1';
}
