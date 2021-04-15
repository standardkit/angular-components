import { Directive, HostBinding, Input } from '@angular/core';
import { AlignmentType } from '../types/alignment.type';

@Directive({
  selector: '[skAlignment]'
})
export class SkAlignmentDirective {
  @Input() skAlignment?: AlignmentType | string;

  @HostBinding('class')
  get class(): string {
    return this.skAlignment ? 'alignment--' + this.skAlignment : '';
  }
}
