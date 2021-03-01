import { Component, Input } from '@angular/core';

@Component({
  selector: 'sk-image',
  templateUrl: 'image.component.html'
})
export class SkImageComponent {
  @Input() src = '';
  @Input() alt = '';
}
