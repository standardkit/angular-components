import { Directive, HostBinding, Input } from '@angular/core';
import { WidthType } from '../types/width.type';

@Directive({
  selector: '[skWidth]'
})
export class SkWidthDirective {
  @Input() skWidth?: WidthType | string;

  @HostBinding('class')
  get class(): string {
    return this.skWidth ? 'width--' + this.skWidth : '';
  }
}
