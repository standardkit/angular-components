import { Directive, HostBinding, Input } from '@angular/core';
import { ElevationType } from '../types/elevation.type';

@Directive({
  selector: '[skElevation]'
})
export class SkElevationDirective {
  @Input() skElevation?: ElevationType | string;

  @HostBinding('class')
  get class(): string {
    return this.skElevation ? 'elevation--' + this.skElevation : '';
  }
}
