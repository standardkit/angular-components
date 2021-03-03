import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[skFullWidth]'
})
export class SkFullWidthDirective {
  @Input() value?: boolean;

  @HostBinding('class')
  get class(): string {
    return this.value ? 'full-width' : '';
  }
}
