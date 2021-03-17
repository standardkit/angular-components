import { Component, Input } from '@angular/core';
import { HeadingType } from '../../../types/heading.type';

@Component({
  selector: 'sk-navigation-title',
  templateUrl: 'navigation-title.component.html'
})
export class SkNavigationTitleComponent {
  @Input() heading: HeadingType = 4;
  @Input() type!: string;
}
