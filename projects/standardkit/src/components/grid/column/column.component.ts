import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'sk-column',
  templateUrl: 'column.component.html'
})
export class SkColumnComponent {
  @HostBinding('class') class = 'column';
  // TODO : Add s,m,l, etc classes
}
