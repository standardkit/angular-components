import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AlertLevelType } from '../../../types/alert-level.type';

@Component({
  selector: 'sk-input',
  templateUrl: 'input.component.html'
})
export class SkInputComponent {
  @Input() fieldId = 'input';
  @Input() state!: AlertLevelType;
  @Input() placeholder!: number;
  @Input() disabled: boolean = false;
  @Input() focus: boolean = false;
  @Input() value: string = '';
  @Input() required: boolean = false;
  @Input() type: 'text' | 'password' | 'tel' = 'text';

  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();

  onValueChange(value: string): void {
    this.valueChange.emit(value);
  }
}
