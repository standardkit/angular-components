import { Component, Input } from '@angular/core';

@Component({
  selector: 'sk-link',
  templateUrl: 'link.component.html'
})
export class SkLinkComponent {
  @Input() route?: string;
  @Input() type?: string;
}
