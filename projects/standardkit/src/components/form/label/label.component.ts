import { Component, Input } from '@angular/core';
import { SkConfigurationService } from '../../../configuration/configuration.service';
import { SizeType } from '../../../types/size.type';

@Component({
  selector: 'sk-label',
  templateUrl: 'label.component.html'
})
export class SkLabelComponent {
  @Input() fieldId?: string = 'input';

  @Input() padding?: SizeType | string;
  @Input() margin?: SizeType | string;
  @Input() size?: SizeType | string;

  defaultMargin?: SizeType | string;
  defaultPadding?: SizeType | string;
  defaultSize?: SizeType | string;

  constructor(private configurationService: SkConfigurationService) {
    const configuration = configurationService.get();
    this.defaultSize = configuration?.label?.size ?? configuration?.size;
    this.defaultMargin = configuration?.label?.margin ?? configuration?.margin;
    this.defaultPadding = configuration?.label?.padding ?? configuration?.padding;
  }
}
