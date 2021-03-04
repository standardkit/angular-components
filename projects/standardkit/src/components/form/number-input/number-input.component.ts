import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AlertLevelType } from '../../../types/alert-level.type';

@Component({
  selector: 'sk-number-input',
  templateUrl: 'number-input.component.html'
})
export class SkNumberInputComponent {
  @Input() fieldId = 'number-input';
  @Input() state!: AlertLevelType;
  @Input() placeholder!: string;
  @Input() disabled: boolean = false;
  @Input() focus: boolean = false;
  @Input() value: number | undefined;
  @Input() min?: number;
  @Input() max?: number;
  @Input() required: boolean = false;

  @Output() valueChange: EventEmitter<number | undefined> = new EventEmitter<number | undefined>();

  onValueChange(value: number | undefined): void {
    this.valueChange.emit(value);
  }
}
