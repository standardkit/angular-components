import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { SkConfigurationService } from '../../../configuration/configuration.service';
import { ColorType } from '../../../types/color.type';
import { FillType } from '../../../types/fill.type';
import { VerticalPositionType } from '../../../types/vertical-position.type';

@Component({
  selector: 'sk-list-item',
  templateUrl: 'list-item.component.html'
})
export class SkListItemComponent implements AfterViewInit {
  @ViewChild('icon') iconReference!: ElementRef;
  @ViewChild('title') titleReference!: ElementRef;

  @Input() position?: VerticalPositionType | string;
  @Input() fill?: FillType | string;
  @Input() type?: ColorType | string;

  isInitialized = false;
  hasIconContent = false;
  hasTitleContent = false;
  defaultPosition?: VerticalPositionType | string;


  constructor(private configurationService: SkConfigurationService) {
    const configuration = configurationService.get();
    this.defaultPosition = configuration?.listItem?.position ?? configuration?.position;
  }

  ngAfterViewInit(): void {
    this.hasIconContent = this.iconReference?.nativeElement.children.length > 0;
    this.hasTitleContent = this.titleReference?.nativeElement.children.length > 0;
    setTimeout(() => this.isInitialized = true, 0);
  }
}
