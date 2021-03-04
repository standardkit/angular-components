import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'sk-checkbox',
  templateUrl: 'checkbox.component.html'
})
export class SkCheckboxComponent {
  @Input() fieldId = 'checkbox';
  @Input() value = false;
  @Input() name!: string;
  @Input() required = false;

  @Output() valueChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  toggle(): void {
    this.value = !this.value;
    this.valueChange.emit(this.value);
  }
}
