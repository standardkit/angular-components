import { Directive, HostBinding, Input } from '@angular/core';
import { SizeType } from '../types/size.type';

@Directive({
  selector: '[skPadding]'
})
export class SkPaddingDirective {
  @Input() value?: SizeType | string;

  @HostBinding('class')
  get class(): string {
    return this.value ? 'padding--' + this.value : '';
  }
}
