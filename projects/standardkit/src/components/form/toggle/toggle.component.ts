import { Component, Input } from '@angular/core';

@Component({
  selector: 'sk-toggle',
  templateUrl: 'toggle.component.html'
})
export class SkToggleComponent {
  @Input() fieldId: string = 'toggle';
  @Input() name?: string;
}
