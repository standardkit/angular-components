import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { SkConfigurationService } from '../../../configuration/configuration.service';
import { CornerType } from '../../../types/corner.type';

@Component({
  selector: 'sk-image',
  templateUrl: 'image.component.html'
})
export class SkImageComponent implements AfterViewInit {
  @ViewChild('caption') captionReference!: ElementRef;

  @Input() src = '';
  @Input() alt = '';
  @Input() corner?: CornerType | string;

  defaultCorner?: CornerType | string;

  isInitialized = false;
  hasCaptionContent = false;

  constructor(private configurationService: SkConfigurationService) {
    const configuration = configurationService.get();
    this.defaultCorner = configuration.image?.corner ?? configuration.corner;
  }

  ngAfterViewInit(): void {
    this.hasCaptionContent = this.captionReference?.nativeElement.children.length > 0;
    setTimeout(() => this.isInitialized = true, 0);
  }

  // TODO : Think of a content projection solution
}
