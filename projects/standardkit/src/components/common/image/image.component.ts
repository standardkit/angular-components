import { Component, Input } from '@angular/core';
import { SkConfigurationService } from '../../../configuration/configuration.service';
import { CornerType } from '../../../types/corner.type';

@Component({
  selector: 'sk-image',
  templateUrl: 'image.component.html'
})
export class SkImageComponent {
  @Input() src = '';
  @Input() alt = '';
  @Input() corner?: CornerType | string;

  defaultCorner?: CornerType | string;

  constructor(private configurationService: SkConfigurationService) {
    const configuration = configurationService.get();
    this.defaultCorner = configuration.image?.corner ?? configuration.corner;
  }

  // TODO : Think of a content projection solution
}
