import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'sk-row',
  templateUrl: 'row.component.html'
})
export class SkRowComponent {
  @HostBinding('class') class = 'row';
}
