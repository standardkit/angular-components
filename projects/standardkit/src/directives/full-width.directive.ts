import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[skFullWidth]'
})
export class SkFullWidthDirective {
  @HostBinding('class.full-width')
  @Input() skFullWidth?: boolean;
}
