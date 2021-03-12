import { Component, Input } from '@angular/core';
import { SkConfigurationService } from '../../../configuration/configuration.service';
import { CornerType } from '../../../types/corner.type';
import { ElevationType } from '../../../types/elevation.type';

@Component({
  selector: 'sk-list',
  templateUrl: 'list.component.html'
})
export class SkListComponent {
  @Input() corner?: CornerType | string;
  @Input() elevation?: ElevationType | string;

  defaultCorner?: CornerType | string;
  defaultElevation?: ElevationType | string;

  constructor(private configurationService: SkConfigurationService) {
    const configuration = configurationService.get();
    this.defaultCorner = configuration.list?.corner ?? configuration.corner;
    this.defaultElevation = configuration.list?.elevation ?? configuration.elevation;
  }
}
