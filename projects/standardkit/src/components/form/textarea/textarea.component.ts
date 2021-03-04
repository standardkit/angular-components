import { Component, Input } from '@angular/core';

@Component({
  selector: 'sk-textarea',
  templateUrl: 'textarea.component.html'
})
export class SkTextareaComponent {
  @Input() fieldId: string = 'textarea';
  @Input() name?: string;
  @Input() columns?: number;
  @Input() rows?: number;
}
