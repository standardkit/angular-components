import { Component, Input } from '@angular/core';
import { CaseType } from '../../../types/case.type';
import { FillType } from '../../../types/fill.type';
import { SizeType } from '../../../types/size.type';

@Component({
  selector: 'sk-navigation-bar',
  templateUrl: 'navigation-bar.component.html'
})
export class SkNavigationBarComponent {
  @Input() padding?: SizeType | string;
  @Input() fill?: FillType | string;
  @Input() size?: SizeType | string;
  @Input() case?: CaseType | string;
  @Input() sticky = false;
}
