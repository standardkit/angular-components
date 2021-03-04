import { Directive, HostBinding, Input } from '@angular/core';
import { SizeType } from '../types/size.type';

@Directive({
  selector: '[skFill]'
})
export class SkFillDirective {
  @Input() skFill?: SizeType | string;

  @HostBinding('class')
  get class(): string {
    return this.skFill ? 'fill--' + this.skFill : '';
  }
}
