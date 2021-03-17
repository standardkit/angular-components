import { Directive, HostBinding, Input } from '@angular/core';
import { SizeType } from '../types/size.type';

@Directive({
  selector: '[skTextSize]'
})
export class SkTextSizeDirective {
  @Input() skTextSize?: SizeType | string;

  @HostBinding('class')
  get class(): string {
    return this.skTextSize ? 'text-size--' + this.skTextSize : '';
  }
}

