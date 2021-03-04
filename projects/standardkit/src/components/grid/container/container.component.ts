import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'sk-container',
  templateUrl: 'container.component.html'
})
export class SkContainerComponent {
  @HostBinding('class') class = 'container';
}
