import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'sk-spacer',
  template: ''
})
export class SkSpacerComponent {
  @HostBinding('class') class = 'spacer';
}
