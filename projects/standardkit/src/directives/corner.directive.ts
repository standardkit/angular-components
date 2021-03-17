import { Directive, HostBinding, Input } from '@angular/core';
import { CornerType } from '../types/corner.type';


@Directive({
  selector: '[skCorner]'
})
export class SkCornerDirective {
  @Input() skCorner?: CornerType | string;

  @HostBinding('class')
  get class(): string {
    return this.skCorner ? 'corner--' + this.skCorner : '';
  }
}
