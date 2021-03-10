import { Component, Input } from '@angular/core';
import { SkConfigurationService } from '../../../configuration/configuration.service';
import { HeadingType } from '../../../types/heading.type';
import { SizeType } from '../../../types/size.type';

@Component({
  selector: 'sk-subtitle',
  templateUrl: 'subtitle.component.html'
})
export class SkSubtitleComponent {
  @Input() heading: HeadingType = 3;
  @Input() type!: string;
  @Input() margin?: SizeType | string;

  defaultMargin?: SizeType | string;

  constructor(private configurationService: SkConfigurationService) {
    const configuration = configurationService.get();
    this.defaultMargin = configuration?.title?.margin ?? configuration?.margin;
  }
}
