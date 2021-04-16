import { Directive, HostBinding, Input } from '@angular/core';
import { VerticalPositionType } from '../types/vertical-position.type';

@Directive({
  selector: '[skVerticalAlignment]'
})
export class SkVerticalAlignmentDirective {
  @Input() skVerticalAlignment?: VerticalPositionType | string;

  @HostBinding('class')
  get class(): string {
    return this.skVerticalAlignment ? 'vertical-alignment--' + this.skVerticalAlignment : '';
  }
}
