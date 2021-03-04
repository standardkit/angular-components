import { Component, Input } from '@angular/core';

@Component({
  selector: 'sk-navigation-title',
  templateUrl: 'navigation-title.component.html'
})
export class SkNavigationTitleComponent {
  @Input() heading: 1 | 2 | 3 | 4 | 5 | 6 = 4;
  @Input() type!: string;
}
