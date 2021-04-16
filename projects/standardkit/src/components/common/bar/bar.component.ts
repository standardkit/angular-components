import { Component, Input } from '@angular/core';
import { SkConfigurationService } from '../../../configuration/configuration.service';
import { AlignmentType } from '../../../types/alignment.type';
import { VerticalPositionType } from '../../../types/vertical-position.type';

@Component({
  selector: 'sk-bar',
  templateUrl: 'bar.component.html'
})
export class SkBarComponent {
  @Input() alignment?: AlignmentType | string;
  @Input() verticalAlignment?: VerticalPositionType | string;

  defaultAlignment?: AlignmentType | string;
  defaultVerticalAlignment?: VerticalPositionType | string;

  constructor(private configurationService: SkConfigurationService) {
    const configuration = configurationService.get();
    this.defaultAlignment = configuration?.bar?.alignment;
    this.defaultVerticalAlignment = configuration?.bar?.verticalAlignment;
  }
}
