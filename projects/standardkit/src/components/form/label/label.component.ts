import { Component, Input } from '@angular/core';

@Component({
  selector: 'sk-label',
  templateUrl: 'label.component.html'
})
export class SkLabelComponent {
  @Input() fieldId?: string = 'input';
}
