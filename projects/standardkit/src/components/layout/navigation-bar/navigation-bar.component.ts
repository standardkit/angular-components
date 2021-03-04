import { Component, HostBinding, Input } from '@angular/core';
import { CaseType } from '../../../types/case.type';
import { ColorType } from '../../../types/color.type';
import { FillType } from '../../../types/fill.type';
import { SizeType } from '../../../types/size.type';

@Component({
  selector: 'sk-navigation-bar',
  templateUrl: 'navigation-bar.component.html'
})
export class SkNavigationBarComponent {
  @HostBinding('class') class = 'navigation-bar__container';

  @Input() padding?: SizeType | string;
  @Input() fill?: FillType | string;
  @Input() color?: ColorType | string;
  @Input() size?: SizeType | string;
  @Input() case?: CaseType | string;
}
