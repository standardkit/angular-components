import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SkConfigurationService } from '../../../configuration/configuration.service';
import { AlertLevelType } from '../../../types/alert-level.type';
import { CornerType } from '../../../types/corner.type';
import { SizeType } from '../../../types/size.type';
import { WidthType } from '../../../types/width.type';

@Component({
  selector: 'sk-input',
  templateUrl: 'input.component.html'
})
export class SkInputComponent {
  @Input() fieldId = 'input';
  @Input() state?: AlertLevelType;
  @Input() placeholder?: string;
  @Input() disabled: boolean = false;
  @Input() focus: boolean = false;
  @Input() value: string = '';
  @Input() required: boolean = false;
  @Input() type: 'text' | 'password' | 'tel' = 'text';

  @Input() margin?: SizeType | string;
  @Input() padding?: SizeType | string;
  @Input() size?: SizeType | string;
  @Input() corner?: CornerType | string;
  @Input() width?: WidthType | string;

  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();

  defaultMargin?: SizeType | string;
  defaultWidth?: WidthType | string;
  defaultPadding?: SizeType | string;
  defaultSize?: SizeType | string;
  defaultCorner?: CornerType | string;

  constructor(private configurationService: SkConfigurationService) {
    const configuration = configurationService.get();
    this.defaultMargin = configuration?.input?.margin ?? configuration?.margin;
    this.defaultPadding = configuration?.input?.padding ?? configuration?.padding;
    this.defaultSize = configuration?.input?.size ?? configuration?.size;
    this.defaultCorner = configuration?.input?.corner ?? configuration?.corner;
    this.defaultWidth = configuration?.input?.width ?? configuration?.formWidth;
  }


  onValueChange(value: string): void {
    this.valueChange.emit(value);
  }
}
