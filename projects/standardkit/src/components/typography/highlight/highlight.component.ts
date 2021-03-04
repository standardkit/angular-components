import { Component, Input } from '@angular/core';
import { SkConfigurationService } from '../../../configuration/configuration.service';
import { HighlightType } from '../../../types/highlight.type';

@Component({
  selector: 'sk-highlight',
  templateUrl: 'highlight.component.html'
})
export class SkHighlightComponent {
  @Input() type?: HighlightType | string;

  defaultType?: HighlightType | string;

  constructor(private configurationService: SkConfigurationService) {
    this.defaultType = configurationService.get()?.highlight?.type;
  }
}
