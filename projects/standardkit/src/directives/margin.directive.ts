import { Directive, HostBinding, Input } from '@angular/core';
import { SizeType } from '../types/size.type';

@Directive({
  selector: '[skMargin]'
})
export class SkMarginDirective {
  @Input() skMargin?: SizeType | string;

  @HostBinding('class')
  get class(): string {
    return this.skMargin ? 'margin--' + this.skMargin : '';
  }
}
