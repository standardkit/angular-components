import { Component, Input } from '@angular/core';

@Component({
  selector: 'sk-link',
  templateUrl: 'link.component.html'
})
export class SkLinkComponent {
  // TODO: add "type" input and add link color to configuration (or use accent?)
  @Input() route?: string;
}
