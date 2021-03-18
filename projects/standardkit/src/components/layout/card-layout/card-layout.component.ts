import { Component, HostBinding, Input } from '@angular/core';
import { SkConfigurationService } from '../../../configuration/configuration.service';
import { CornerType } from '../../../types/corner.type';
import { FillType } from '../../../types/fill.type';
import { SizeType } from '../../../types/size.type';

@Component({
  selector: 'sk-card-layout',
  templateUrl: 'card-layout.component.html'
})
export class SkCardLayoutComponent {
  @HostBinding('class') class = 'card-layout__container';

  @Input() fill?: FillType | string;
  @Input() margin?: SizeType | string;
  @Input() padding?: SizeType | string;
  @Input() size?: SizeType | string;
  @Input() corner?: CornerType | string;

  defaultFill?: FillType | string;
  defaultMargin?: SizeType | string;
  defaultPadding?: SizeType | string;
  defaultSize?: SizeType | string;
  defaultCorner?: CornerType | string;

  constructor(private configurationService: SkConfigurationService) {
    const configuration = configurationService.get();
    this.defaultMargin = configuration?.cardLayout?.margin ?? configuration?.margin;
    this.defaultFill = configuration?.cardLayout?.fill ?? configuration?.fill;
    this.defaultPadding = configuration?.cardLayout?.padding ?? configuration?.padding;
    this.defaultSize = configuration?.cardLayout?.size ?? configuration?.size;
    this.defaultCorner = configuration?.cardLayout?.corner ?? configuration?.corner;
  }

}
