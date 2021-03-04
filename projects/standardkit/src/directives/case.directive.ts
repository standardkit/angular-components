import { Directive, HostBinding, Input } from '@angular/core';
import { SizeType } from '../types/size.type';

@Directive({
  selector: '[skCase]'
})
export class SkCaseDirective {
  @Input() skCase?: SizeType | string;

  @HostBinding('class')
  get class(): string {
    return this.skCase ? 'case--' + this.skCase : '';
  }
}
