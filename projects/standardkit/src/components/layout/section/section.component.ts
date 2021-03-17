import { Component, Input } from '@angular/core';
import { SkConfigurationService } from '../../../configuration/configuration.service';
import { SizeType } from '../../../types/size.type';

@Component({
  selector: 'sk-section',
  templateUrl: 'section.component.html'
})
export class SkSectionComponent {
  @Input() margin?: SizeType | string;

  defaultMargin?: SizeType | string;

  constructor(private configurationService: SkConfigurationService) {
    const configuration = configurationService.get();
    this.defaultMargin = configuration.section?.margin ?? configuration.margin;
  }
}
