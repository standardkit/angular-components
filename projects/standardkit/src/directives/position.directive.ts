import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[skPosition]'
})
export class SkPositionDirective {
  @Input() skPosition: (string | undefined | null)[] = [];

  @HostBinding('class')
  get class(): string {

    for (const value in this.skPosition) {
      if (value !== null && value !== undefined) {
        return 'position--' + value;
      }
    }
    return '';
  }
}
