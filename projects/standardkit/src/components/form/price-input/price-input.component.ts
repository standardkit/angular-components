import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AlertLevelType } from '../../../types/alert-level.type';

@Component({
  selector: 'sk-price-input',
  templateUrl: 'price-input.component.html'
})
export class SkPriceInputComponent {
  @Input() fieldId = 'price-input';
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
    // TODO : Check and convert to cents
    // TODO : Add currency prefix option and/or pipe
  }
}
