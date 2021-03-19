import { Component, Input } from '@angular/core';
import { SkConfigurationService } from '../../../configuration/configuration.service';
import { SizeType } from '../../../types/size.type';

@Component({
  selector: 'sk-divider',
  templateUrl: 'divider.component.html'
})
export class SkDividerComponent {
  @Input() margin?: SizeType | string;

  defaultMargin?: SizeType | string;

  constructor(private configurationService: SkConfigurationService) {
    const config = configurationService.get();
    this.defaultMargin = config?.divider?.margin ?? config?.margin;
  }
}
