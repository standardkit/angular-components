import { Directive, HostBinding, Input } from '@angular/core';
import { SizeType } from '../types/size.type';

@Directive({
  selector: '[skSize]'
})
export class SkSizeDirective {
  @Input() skSize?: SizeType | string;

  @HostBinding('class')
  get class(): string {
    return this.skSize ? 'size--' + this.skSize : '';
  }
}

