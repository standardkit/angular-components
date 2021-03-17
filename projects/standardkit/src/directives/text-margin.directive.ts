import { Directive, HostBinding, Input } from '@angular/core';
import { SizeType } from '../types/size.type';

@Directive({
  selector: '[skTextMargin]'
})
export class SkTextMarginDirective {
  @Input() skTextMargin?: SizeType | string;

  @HostBinding('class')
  get class(): string {
    return this.skTextMargin ? 'text-margin--' + this.skTextMargin : '';
  }
}
