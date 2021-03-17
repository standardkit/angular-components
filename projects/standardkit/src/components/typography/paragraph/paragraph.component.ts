import { Component, Input } from '@angular/core';
import { SkConfigurationService } from '../../../configuration/configuration.service';
import { SizeType } from '../../../types/size.type';

@Component({
  selector: 'sk-paragraph',
  templateUrl: 'paragraph.component.html'
})
export class SkParagraphComponent {
  @Input() margin?: SizeType | string;
  @Input() size?: SizeType | string;

  defaultMargin?: SizeType | string;
  defaultSize?: SizeType | string;

  constructor(private configurationService: SkConfigurationService) {
    const configuration = configurationService.get();
    this.defaultMargin = configuration?.paragraph?.margin ?? configuration?.margin;
    this.defaultSize = configuration?.paragraph?.size ?? configuration?.size;
  }
}
