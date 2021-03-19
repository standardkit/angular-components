import { Component, Input } from '@angular/core';
import { SkConfigurationService } from '../../../configuration/configuration.service';
import { SizeType } from '../../../types/size.type';

@Component({
  selector: 'sk-table',
  templateUrl: 'table.component.html'
})
export class SkTableComponent {
  @Input() padding?: SizeType | string;
  @Input() size?: SizeType | string;
  @Input() striped = false;

  defaultPadding?: SizeType | string;
  defaultSize?: SizeType | string;

  constructor(private configurationService: SkConfigurationService) {
    const configuration = configurationService.get();
    this.defaultPadding = configuration?.table?.padding ?? configuration?.padding;
    this.defaultSize = configuration?.table?.size ?? configuration?.size;
  }
}
