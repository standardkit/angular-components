import { Directive, HostBinding, Input } from '@angular/core';
import { VerticalPositionType } from '../types/vertical-position.type';

@Directive({
  selector: '[skPosition]'
})
export class SkPositionDirective {
  @Input() skPosition?: VerticalPositionType | string;

  @HostBinding('class')
  get class(): string {
    return this.skPosition ? 'position--' + this.skPosition : '';
  }
}
