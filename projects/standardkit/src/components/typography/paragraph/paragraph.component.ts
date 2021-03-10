import { Component, Input } from '@angular/core';
import { SkConfigurationService } from '../../../configuration/configuration.service';
import { SizeType } from '../../../types/size.type';

@Component({
  selector: 'sk-paragraph',
  templateUrl: 'paragraph.component.html'
})
export class SkParagraphComponent {
  @Input() margin?: SizeType | string;

  defaultMargin?: SizeType | string;

  constructor(private configurationService: SkConfigurationService) {
    const configuration = configurationService.get();
    this.defaultMargin = configuration?.paragraph?.margin ?? configuration?.margin;
  }
}
