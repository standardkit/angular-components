import { Directive, HostBinding, Input } from '@angular/core';
import { ColorType } from '../types/color.type';

@Directive({
  selector: '[skColor]'
})
export class SkColorDirective {
  @Input() skColor?: ColorType | string;

  @HostBinding('class')
  get class(): string {
    return this.skColor ? 'color--' + this.skColor : '';
  }
}
