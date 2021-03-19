import { Component, Input } from '@angular/core';
import { SkConfigurationService } from '../../../configuration/configuration.service';
import { ColorType } from '../../../types/color.type';
import { FillType } from '../../../types/fill.type';
import { SizeType } from '../../../types/size.type';

@Component({
  selector: 'sk-spinner',
  templateUrl: 'spinner.component.html'
})
export class SkSpinnerComponent {
  @Input() type?: ColorType | string;
  @Input() fill?: FillType | string;
  @Input() margin?: SizeType | string;
  @Input() size?: SizeType | string;

  defaultMargin?: SizeType | string;
  defaultSize?: SizeType | string;
  defaultType?: ColorType | string;
  defaultFill?: FillType | string;

  constructor(private configurationService: SkConfigurationService) {
    const configuration = configurationService.get();
    this.defaultType = configuration?.spinner?.type;
    this.defaultFill = configuration?.spinner?.fill ?? configuration?.fill;
    this.defaultSize = configuration?.spinner?.size ?? configuration?.size;
    this.defaultMargin = configuration?.spinner?.margin ?? configuration?.margin;
  }
}
