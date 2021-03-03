import { Directive, HostBinding, Input } from '@angular/core';
import { SizeType } from '../types/size.type';

@Directive({
  selector: '[skPadding]'
})
export class SkPaddingDirective {
  @Input() skPadding?: SizeType | string;

  @HostBinding('class')
  get class(): string {
    return this.skPadding ? 'padding--' + this.skPadding : '';
  }
}
