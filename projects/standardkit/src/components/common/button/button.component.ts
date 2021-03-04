import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'sk-button',
  templateUrl: 'button.component.html'
})
export class SkButtonComponent {
  @Input() disabled = false;
  @Input() isSubmit = false;

  @Output() skClick = new EventEmitter<void>();

  onClick(): void {
    if (!this.disabled) {
      this.skClick.emit();
    }
  }
}
