import { Component, Input } from '@angular/core';

@Component({
  selector: 'sk-select',
  templateUrl: 'select.component.html'
})
export class SkSelectComponent {
  @Input() fieldId: string = 'select';
  @Input() name?: string;
}
