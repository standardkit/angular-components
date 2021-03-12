import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { VerticalPositionType } from '../../../types/vertical-position.type';

@Component({
  selector: 'sk-list-item',
  templateUrl: 'list-item.component.html'
})
export class SkListItemComponent implements AfterViewInit {
  @ViewChild('icon') iconReference!: ElementRef;
  @ViewChild('title') titleReference!: ElementRef;

  @Input() alignIcon?: VerticalPositionType | string;

  isInitialized = false;
  hasIconContent = false;
  hasTitleContent = false;

  ngAfterViewInit(): void {
    this.hasIconContent = this.iconReference?.nativeElement.children.length > 0;
    this.hasTitleContent = this.titleReference?.nativeElement.children.length > 0;
    setTimeout(() => this.isInitialized = true, 0);
  }
}